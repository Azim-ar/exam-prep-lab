import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import allQuestions from '../data/index'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ExamPage() {
  const navigate = useNavigate()
  const setup = JSON.parse(sessionStorage.getItem('epl-setup') || '{}')
  const { timerEnabled = true, feedbackMode = 'instant', bookmarkMode = false } = setup

  const [questions] = useState(() => {
    if (bookmarkMode) {
      const bookmarks = JSON.parse(localStorage.getItem('epl-bookmarks-psm1') || '[]')
      const bqs = allQuestions.filter(q => bookmarks.includes(q.id))
      return bqs.map(q => ({
        ...q,
        shuffledOptions: q.options.map((opt, i) => ({ text: opt, origIdx: i }))
          .sort(() => Math.random() - 0.5)
      }))
    }
    return shuffle(allQuestions).slice(0, 80).map(q => ({
      ...q,
      shuffledOptions: q.options.map((opt, i) => ({ text: opt, origIdx: i }))
        .sort(() => Math.random() - 0.5)
    }))
  })

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({}) // { questionId: [selectedOrigIdx...] }
  const [confirmed, setConfirmed] = useState({}) // { questionId: true } — answer locked in
  const [bookmarks, setBookmarks] = useState(() =>
    JSON.parse(localStorage.getItem('epl-bookmarks-psm1') || '[]')
  )
  const [timeLeft, setTimeLeft] = useState(60 * 60)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const totalQ = questions.length
  const q = questions[current]

  // Timer
  useEffect(() => {
    if (!timerEnabled) return
    if (paused) return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timerRef.current)
          submitExam()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [timerEnabled, paused])

  function formatTime(s) {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const isMulti = q.correctAnswers.length > 1
  const currentAnswers = answers[q.id] || []
  const isConfirmed = confirmed[q.id]

  function selectOption(origIdx) {
    if (isConfirmed) return
    if (feedbackMode === 'instant') {
      if (isMulti) {
        // toggle
        const prev = answers[q.id] || []
        if (prev.includes(origIdx)) {
          setAnswers({ ...answers, [q.id]: prev.filter(i => i !== origIdx) })
        } else {
          setAnswers({ ...answers, [q.id]: [...prev, origIdx] })
        }
      } else {
        setAnswers({ ...answers, [q.id]: [origIdx] })
        setConfirmed({ ...confirmed, [q.id]: true })
      }
    } else {
      // end mode: toggle multi, single select
      if (isMulti) {
        const prev = answers[q.id] || []
        if (prev.includes(origIdx)) {
          setAnswers({ ...answers, [q.id]: prev.filter(i => i !== origIdx) })
        } else {
          setAnswers({ ...answers, [q.id]: [...prev, origIdx] })
        }
      } else {
        setAnswers({ ...answers, [q.id]: [origIdx] })
      }
    }
  }

  function confirmMulti() {
    if ((answers[q.id] || []).length === 0) return
    setConfirmed({ ...confirmed, [q.id]: true })
  }

  function toggleBookmark() {
    const newBm = bookmarks.includes(q.id)
      ? bookmarks.filter(id => id !== q.id)
      : [...bookmarks, q.id]
    setBookmarks(newBm)
    localStorage.setItem('epl-bookmarks-psm1', JSON.stringify(newBm))
  }

  function submitExam() {
    const result = {
      questions: questions.map(q => ({
        id: q.id,
        text: q.text,
        options: q.options,
        shuffledOptions: q.shuffledOptions,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation,
        userAnswers: answers[q.id] || null
      })),
      feedbackMode,
      timeUsed: timerEnabled ? 3600 - timeLeft : null
    }
    sessionStorage.setItem('epl-result', JSON.stringify(result))
    navigate('/result')
  }

  // Option state for instant mode
  function getOptionState(opt) {
    if (!isConfirmed && feedbackMode === 'instant') {
      const selected = currentAnswers.includes(opt.origIdx)
      return selected ? 'selected' : ''
    }
    if (!isConfirmed) {
      const selected = currentAnswers.includes(opt.origIdx)
      return selected ? 'selected' : ''
    }
    // confirmed
    const isCorrect = q.correctAnswers.includes(opt.origIdx)
    const wasSelected = currentAnswers.includes(opt.origIdx)
    if (isCorrect && wasSelected) return 'correct'
    if (!isCorrect && wasSelected) return 'incorrect'
    if (isCorrect && !wasSelected) return 'revealed'
    return 'dimmed'
  }

  const showExplanation = isConfirmed && feedbackMode === 'instant'
  const userWasCorrect = isConfirmed && q.correctAnswers.every(idx => currentAnswers.includes(idx)) && currentAnswers.every(idx => q.correctAnswers.includes(idx))
  const progress = ((current + 1) / totalQ) * 100

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', padding: '24px 32px' }}>
      {/* Top bar */}
      <div className="exam-topbar">
        <button className="back-link" onClick={() => navigate('/setup')} style={{ marginBottom: 0 }}>
          <ArrowLeft /> Setup
        </button>
        {timerEnabled && (
          <div className={`timer-badge${timeLeft < 300 ? ' warning' : ''}`}>
            <ClockIcon />
            <span>{formatTime(timeLeft)}</span>
            <button className="timer-pause" onClick={() => setPaused(!paused)}>
              {paused ? <PlayIcon /> : <PauseIcon />}
            </button>
          </div>
        )}
      </div>

      {/* Progress */}
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div className="exam-progress-label">{current + 1} / {totalQ}</div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question card */}
        <div className="question-card">
          <div className="question-meta">
            <span className="question-type">
              {isMulti ? `Multiple answers (${q.correctAnswers.length})` : 'Single answer'}
            </span>
            <button
              className={`bookmark-btn${bookmarks.includes(q.id) ? ' bookmarked' : ''}`}
              onClick={toggleBookmark}
            >
              <BookmarkIcon filled={bookmarks.includes(q.id)} />
              {bookmarks.includes(q.id) ? 'Bookmarked' : 'Bookmark question'}
            </button>
          </div>

          <div className="question-text">{q.text}</div>

          <div className="options">
            {q.shuffledOptions.map((opt, i) => {
              const state = getOptionState(opt)
              return (
                <button
                  key={i}
                  className={`option-btn${state ? ` ${state}` : ''}`}
                  onClick={() => selectOption(opt.origIdx)}
                  disabled={isConfirmed}
                >
                  {isMulti ? (
                    <div className={`option-check${state === 'selected' || state === 'correct' || state === 'revealed' ? ' checked' : ''}`}>
                      {(state === 'correct' || state === 'revealed' || (state === 'selected' && !isConfirmed)) && <CheckMini />}
                    </div>
                  ) : (
                    <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                  )}
                  <span>{opt.text}</span>
                  {isConfirmed && state === 'correct' && <span style={{ marginLeft: 'auto', flexShrink: 0 }}><CheckIcon /></span>}
                  {isConfirmed && state === 'incorrect' && <span style={{ marginLeft: 'auto', flexShrink: 0 }}><XIcon /></span>}
                </button>
              )
            })}
          </div>

          {/* Multi-select confirm button */}
          {isMulti && !isConfirmed && feedbackMode === 'instant' && (
            <div className="multi-confirm">
              <button
                className="confirm-btn"
                onClick={confirmMulti}
                disabled={currentAnswers.length === 0}
              >
                Confirm selection ({currentAnswers.length}/{q.correctAnswers.length})
              </button>
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div className={`explanation${!userWasCorrect ? ' wrong' : ''}`}>
              {q.explanation}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="exam-nav">
          <button
            className="nav-btn"
            onClick={() => setCurrent(c => c - 1)}
            disabled={current === 0}
            style={{ opacity: current === 0 ? 0.4 : 1 }}
          >
            <ArrowLeft /> Previous
          </button>

          {current < totalQ - 1 ? (
            <button
              className="nav-btn next"
              onClick={() => setCurrent(c => c + 1)}
            >
              Next <ArrowRight />
            </button>
          ) : (
            <button className="nav-btn submit" onClick={submitExam}>
              Submit exam <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function ArrowLeft() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ArrowRight() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ClockIcon() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function PauseIcon() {
  return <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
}
function PlayIcon() {
  return <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
}
function CheckIcon() {
  return <svg width="14" height="14" fill="none" stroke="var(--green)" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
}
function XIcon() {
  return <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}
function CheckMini() {
  return <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
}
function BookmarkIcon({ filled }) {
  return <svg width="13" height="13" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

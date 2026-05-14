import { useState, useEffect, useRef } from 'react'
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

export default function ExamPage({ collapsed, setCollapsed }) {
  const navigate = useNavigate()
  const setup = JSON.parse(sessionStorage.getItem('epl-setup') || '{}')
  const { timerEnabled = true, feedbackMode = 'instant', bookmarkMode = false } = setup
  const [theme, setTheme] = useState(() => localStorage.getItem('epl-theme') || 'dark')

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : ''
  }, [theme])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('epl-theme', next)
    document.body.className = next === 'light' ? 'light' : ''
  }

  const [questions] = useState(() => {
    let pool = allQuestions
    if (bookmarkMode) {
      const bms = JSON.parse(localStorage.getItem('epl-bookmarks-psm1') || '[]')
      pool = allQuestions.filter(q => bms.includes(q.id))
    }
    return shuffle(pool).slice(0, bookmarkMode ? pool.length : 80).map(q => ({
      ...q,
      shuffledOptions: shuffle(q.options.map((opt, i) => ({ text: opt, origIdx: i })))
    }))
  })

  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [confirmed, setConfirmed] = useState({})
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('epl-bookmarks-psm1') || '[]'))
  const [timeLeft, setTimeLeft] = useState(60 * 60)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const q = questions[current]
  const totalQ = questions.length

  useEffect(() => {
    if (!timerEnabled || paused) return
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); submitExam(); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
  }, [timerEnabled, paused])

  if (!q) return null

  const isMulti = q.correctAnswers.length > 1
  const currentAnswers = answers[q.id] || []
  const isConfirmed = !!confirmed[q.id]

  function selectOption(origIdx) {
    if (isConfirmed) return
    if (isMulti) {
      const prev = answers[q.id] || []
      const updated = prev.includes(origIdx) ? prev.filter(i => i !== origIdx) : [...prev, origIdx]
      setAnswers({ ...answers, [q.id]: updated })
    } else {
      setAnswers({ ...answers, [q.id]: [origIdx] })
      // In instant mode, lock single-answer immediately
      if (feedbackMode === 'instant') {
        setConfirmed({ ...confirmed, [q.id]: true })
      }
    }
  }

  function confirmMulti() {
    if ((answers[q.id] || []).length === 0) return
    setConfirmed({ ...confirmed, [q.id]: true })
  }

  function toggleBookmark() {
    const newBm = bookmarks.includes(q.id) ? bookmarks.filter(id => id !== q.id) : [...bookmarks, q.id]
    setBookmarks(newBm)
    localStorage.setItem('epl-bookmarks-psm1', JSON.stringify(newBm))
  }

  function submitExam() {
    const result = {
      questions: questions.map(q => ({
        id: q.id, text: q.text, options: q.options,
        shuffledOptions: q.shuffledOptions,
        correctAnswers: q.correctAnswers, explanation: q.explanation,
        userAnswers: answers[q.id] || null
      })),
      feedbackMode,
      timeUsed: timerEnabled ? 3600 - timeLeft : null
    }
    sessionStorage.setItem('epl-result', JSON.stringify(result))
    navigate('/result')
  }

  function getOptionState(opt) {
    const selected = currentAnswers.includes(opt.origIdx)
    if (!isConfirmed) return selected ? 'selected' : ''
    const isCorrect = q.correctAnswers.includes(opt.origIdx)
    if (isCorrect && selected) return 'correct'
    if (!isCorrect && selected) return 'incorrect'
    if (isCorrect && !selected) return 'revealed'
    return 'dimmed'
  }

  const showExplanation = isConfirmed && feedbackMode === 'instant'
  const userWasCorrect = isConfirmed &&
    q.correctAnswers.every(idx => currentAnswers.includes(idx)) &&
    currentAnswers.every(idx => q.correctAnswers.includes(idx))
  const progress = ((current + 1) / totalQ) * 100

  function formatTime(s) {
    const m = Math.floor(s / 60)
    return `${m}:${(s % 60).toString().padStart(2, '0')}`
  }

  // Sidebar state preserved
  const sidebarW = collapsed ? '52px' : '200px'

  return (
    <div style={{ display:'flex', minHeight:'100vh', background:'var(--bg)' }}>
      {/* Sidebar stays visible */}
      <div style={{ width: sidebarW, flexShrink: 0 }} />
      <div className={`sidebar${collapsed ? ' collapsed' : ''}`}>
        <div className="sidebar-logo">A.</div>
        <nav className="sidebar-nav">
          {[
            { label:'Home', path:'/', icon:<HomeIcon /> },
            { label:'Courses', path:'/courses', icon:<CoursesIcon /> },
            { label:'Say Hi', path:'/contact', icon:<ChatIcon /> },
          ].map(link => (
            <button key={link.path} className="sidebar-link" onClick={() => navigate(link.path)} title={collapsed ? link.label : ''}>
              {link.icon}
              <span className="sidebar-link-label">{link.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-toggle">
          <button className="toggle-btn" onClick={() => { setCollapsed(!collapsed); localStorage.setItem('epl-sidebar', !collapsed) }}>
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>
      </div>

      <div style={{ flex:1, padding:'28px 32px' }}>
        <div style={{ maxWidth:720, margin:'0 auto' }}>
          {/* Top bar */}
          <div className="exam-topbar">
            <button className="back-link" style={{ marginBottom:0 }} onClick={() => navigate(bookmarkMode ? '/course/psm1' : '/setup')}>
              <ArrowLeft /> {bookmarkMode ? 'Back to PSM I' : 'Setup'}
            </button>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
            <button className="theme-toggle" onClick={toggleTheme} style={{padding:'6px 12px',fontSize:12}}>
              {theme === 'dark' ? '☀ Light' : '☾ Dark'}
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
          </div>

          <div className="exam-progress-label">{current + 1} / {totalQ}</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width:`${progress}%` }} />
          </div>

          <div className="question-card">
            <div className="question-meta">
              <span className="question-type">
                {isMulti ? `Multiple answers (choose ${q.correctAnswers.length})` : 'Single answer'}
              </span>
              <button className={`bookmark-btn${bookmarks.includes(q.id) ? ' bookmarked' : ''}`} onClick={toggleBookmark}>
                <BookmarkIcon filled={bookmarks.includes(q.id)} />
                {bookmarks.includes(q.id) ? 'Bookmarked' : 'Bookmark'}
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
                      <div className={`option-check`}>
                        {(state === 'selected' || state === 'correct' || state === 'revealed') && <CheckMini />}
                      </div>
                    ) : (
                      <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                    )}
                    <span style={{ flex:1 }}>{opt.text}</span>
                    {isConfirmed && state === 'correct' && <CheckIcon />}
                    {isConfirmed && state === 'incorrect' && <XIcon />}
                  </button>
                )
              })}
            </div>

            {isMulti && !isConfirmed && feedbackMode === 'instant' && (
              <div className="multi-confirm">
                <button className="confirm-btn" onClick={confirmMulti} disabled={currentAnswers.length === 0}>
                  Confirm ({currentAnswers.length}/{q.correctAnswers.length} selected)
                </button>
              </div>
            )}

            {showExplanation && (
              <div className={`explanation${!userWasCorrect ? ' wrong' : ''}`}>
                {q.explanation}
              </div>
            )}
          </div>

          <div className="exam-nav">
            <button className="nav-btn" onClick={() => setCurrent(c => c - 1)} disabled={current === 0}>
              <ArrowLeft /> Previous
            </button>
            {current < totalQ - 1 ? (
              <button className="nav-btn next" onClick={() => setCurrent(c => c + 1)}>
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
    </div>
  )
}

function HomeIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function CoursesIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> }
function ChatIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ChevronLeft() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ChevronRight() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ArrowLeft() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ArrowRight() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ClockIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
function PauseIcon() { return <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> }
function PlayIcon() { return <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg> }
function CheckIcon() { return <svg width="14" height="14" fill="none" stroke="var(--green)" strokeWidth="2" viewBox="0 0 24 24" style={{flexShrink:0}}><polyline points="20 6 9 17 4 12"/></svg> }
function XIcon() { return <svg width="14" height="14" fill="none" stroke="var(--red)" strokeWidth="2" viewBox="0 0 24 24" style={{flexShrink:0}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> }
function CheckMini() { return <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> }
function BookmarkIcon({ filled }) { return <svg width="13" height="13" fill={filled?'currentColor':'none'} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg> }

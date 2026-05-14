import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResultPage() {
  const navigate = useNavigate()
  const result = JSON.parse(sessionStorage.getItem('epl-result') || '{}')
  const { questions = [], feedbackMode, timeUsed } = result

  const [filter, setFilter] = useState('all')

  if (!questions.length) {
    navigate('/')
    return null
  }

  // Score calculation
  const evaluated = questions.map(q => {
    const ua = q.userAnswers
    if (!ua || ua.length === 0) return { ...q, status: 'skipped' }
    const correct = q.correctAnswers.every(idx => ua.includes(idx)) && ua.every(idx => q.correctAnswers.includes(idx))
    return { ...q, status: correct ? 'correct' : 'incorrect' }
  })

  const correctCount = evaluated.filter(q => q.status === 'correct').length
  const incorrectCount = evaluated.filter(q => q.status === 'incorrect').length
  const skippedCount = evaluated.filter(q => q.status === 'skipped').length
  const percentage = Math.round((correctCount / questions.length) * 100)
  const passed = percentage >= 85

  const filtered = filter === 'all' ? evaluated
    : filter === 'correct' ? evaluated.filter(q => q.status === 'correct')
    : evaluated.filter(q => q.status !== 'correct')

  function formatTime(s) {
    if (!s) return '—'
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  function retryIncorrect() {
    const incorrect = evaluated.filter(q => q.status !== 'correct').map(q => q.id)
    const incorrectQs = questions.filter(q => incorrect.includes(q.id))
    const newResult = {
      questions: incorrectQs,
      feedbackMode: 'instant',
      timeUsed: null
    }
    // Set up a retry exam
    const setup = { feedbackMode: 'instant', timerEnabled: false, bookmarkMode: false, retryIds: incorrect }
    sessionStorage.setItem('epl-setup', JSON.stringify(setup))
    sessionStorage.setItem('epl-retry-ids', JSON.stringify(incorrect))
    navigate('/exam')
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', padding: '40px 32px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>

        {/* Result hero */}
        <div className="result-hero">
          <div className={`result-icon ${passed ? 'pass' : 'fail'}`}>
            {passed ? <TrophyIcon /> : <RetryIcon />}
          </div>
          <div className={`result-verdict ${passed ? 'pass' : 'fail'}`}>
            {passed ? 'PASS' : 'FAIL'}
          </div>
          <div className="result-sub">
            {passed
              ? `You scored above the 85% pass mark — well done!`
              : `You need 85% to pass. Keep practicing — you'll get there.`
            }
          </div>

          <div className="result-stats">
            <div className="rs">
              <div className="rs-num">{correctCount}/{questions.length}</div>
              <div className="rs-label">Score</div>
            </div>
            <div className="rs">
              <div className={`rs-num ${passed ? 'green' : 'red'}`}>{percentage}%</div>
              <div className="rs-label">Percentage</div>
            </div>
            <div className="rs">
              <div className="rs-num">{formatTime(timeUsed)}</div>
              <div className="rs-label">Time used</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 8 }}>
            <div style={{ background: 'var(--green-dim)', borderRadius: 8, padding: '10px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--green)' }}>{correctCount}</div>
              <div style={{ fontSize: 11, color: 'var(--green)' }}>Correct</div>
            </div>
            <div style={{ background: 'var(--red-dim)', borderRadius: 8, padding: '10px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--red)' }}>{incorrectCount}</div>
              <div style={{ fontSize: 11, color: 'var(--red)' }}>Incorrect</div>
            </div>
            {skippedCount > 0 && (
              <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 500, color: 'var(--text2)' }}>{skippedCount}</div>
                <div style={{ fontSize: 11, color: 'var(--text3)' }}>Skipped</div>
              </div>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="result-actions">
          <button
            className={`result-btn${filter === 'all' ? ' active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All questions ({questions.length})
          </button>
          <button
            className={`result-btn${filter === 'correct' ? ' active' : ''}`}
            onClick={() => setFilter('correct')}
          >
            Correct ({correctCount})
          </button>
          <button
            className={`result-btn${filter === 'incorrect' ? ' active' : ''}`}
            onClick={() => setFilter('incorrect')}
          >
            Incorrect ({incorrectCount + skippedCount})
          </button>
          {incorrectCount + skippedCount > 0 && (
            <button className="result-btn retry" onClick={retryIncorrect}>
              Retry incorrect
            </button>
          )}
          <button className="result-btn" onClick={() => navigate('/setup')}>
            New exam
          </button>
        </div>

        {/* Review list */}
        <div className="review-list">
          {filtered.map((q, i) => {
            const ua = q.userAnswers || []
            return (
              <div key={q.id} className="review-item">
                <div className="review-item-header">
                  <div className="review-q-text">
                    <span style={{ color: 'var(--text3)', marginRight: 8, fontSize: 12 }}>Q{q.id}</span>
                    {q.text}
                  </div>
                  <span className={`review-status ${q.status}`}>
                    {q.status === 'correct' ? '✓ Correct' : q.status === 'incorrect' ? '✗ Incorrect' : '— Skipped'}
                  </span>
                </div>

                <div className="review-answers">
                  {q.options.map((opt, oi) => {
                    const isCorrect = q.correctAnswers.includes(oi)
                    const wasSelected = ua.includes(oi)
                    let cls = 'neutral'
                    if (isCorrect) cls = 'correct-ans'
                    if (wasSelected && !isCorrect) cls = 'wrong-ans'
                    if (!isCorrect && !wasSelected) return null
                    return (
                      <div key={oi} className={`review-answer ${cls}`}>
                        {isCorrect ? <CheckIcon /> : <XSmIcon />}
                        {opt}
                      </div>
                    )
                  })}
                </div>

                <div className="review-explanation">
                  {q.explanation}
                </div>
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button className="result-btn" onClick={() => navigate('/course/psm1')}>
            Back to PSM I
          </button>
          <button className="result-btn" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </div>
    </div>
  )
}

function TrophyIcon() {
  return <svg width="28" height="28" fill="none" stroke="var(--green)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5H7l1 8a4 4 0 008 0l1-8z"/><path d="M7 5H4a1 1 0 00-1 1v2a4 4 0 004 4M17 5h3a1 1 0 011 1v2a4 4 0 01-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function RetryIcon() {
  return <svg width="28" height="28" fill="none" stroke="var(--red)" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function CheckIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
}
function XSmIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}

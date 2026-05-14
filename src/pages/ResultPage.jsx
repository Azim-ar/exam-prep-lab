import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResultPage({ collapsed, setCollapsed }) {
  const navigate = useNavigate()
  const result = JSON.parse(sessionStorage.getItem('epl-result') || '{}')
  const { questions = [], feedbackMode, timeUsed } = result
  const [filter, setFilter] = useState('all')
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

  if (!questions.length) { navigate('/'); return null }

  const evaluated = questions.map(q => {
    const ua = q.userAnswers
    if (!ua || ua.length === 0) return { ...q, status: 'skipped' }
    const correct = q.correctAnswers.every(i => ua.includes(i)) && ua.every(i => q.correctAnswers.includes(i))
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
    return `${Math.floor(s/60)}:${(s%60).toString().padStart(2,'0')}`
  }

  function retryIncorrect() {
    const ids = evaluated.filter(q => q.status !== 'correct').map(q => q.id)
    sessionStorage.setItem('epl-setup', JSON.stringify({ feedbackMode:'instant', timerEnabled:false, bookmarkMode:false, retryIds:ids }))
    sessionStorage.setItem('epl-retry-ids', JSON.stringify(ids))
    navigate('/exam')
  }

  const sidebarW = collapsed ? '52px' : '200px'

  return (
    <div style={{ display:'flex', minHeight:'100vh', background:'var(--bg)' }}>
      <div style={{ width: sidebarW, flexShrink: 0 }} />
      {/* Sidebar */}
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

      <div style={{ flex:1, padding:'32px', overflowY:'auto' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>

          {/* Theme toggle */}
          <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:24 }}>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>

          {/* Result summary */}
          <div className="result-hero">
            <div className={`result-icon ${passed?'pass':'fail'}`}>
              {passed ? <TrophyIcon /> : <RetryIconSvg />}
            </div>
            <div className={`result-verdict ${passed?'pass':'fail'}`}>{passed?'PASS':'FAIL'}</div>
            <div className="result-sub">
              {passed ? 'You scored above the 85% pass mark — well done!' : "You need 85% to pass. Keep practicing — you'll get there."}
            </div>
            <div className="result-stats">
              <div className="rs"><div className="rs-num">{correctCount}/{questions.length}</div><div className="rs-label">Score</div></div>
              <div className="rs"><div className={`rs-num ${passed?'green':'red'}`}>{percentage}%</div><div className="rs-label">Percentage</div></div>
              <div className="rs"><div className="rs-num">{formatTime(timeUsed)}</div><div className="rs-label">Time used</div></div>
            </div>
            <div style={{ display:'flex', gap:10, justifyContent:'center', marginBottom:8 }}>
              <div style={{ background:'var(--green-dim)', borderRadius:8, padding:'10px 24px', textAlign:'center' }}>
                <div style={{ fontSize:22, fontWeight:500, color:'var(--green)' }}>{correctCount}</div>
                <div style={{ fontSize:11, color:'var(--green)' }}>Correct</div>
              </div>
              <div style={{ background:'var(--red-dim)', borderRadius:8, padding:'10px 24px', textAlign:'center' }}>
                <div style={{ fontSize:22, fontWeight:500, color:'var(--red)' }}>{incorrectCount + skippedCount}</div>
                <div style={{ fontSize:11, color:'var(--red)' }}>Incorrect / Skipped</div>
              </div>
            </div>
          </div>

          {/* STICKY ACTION BAR */}
          <div className="result-actions-bar">
            <div className="result-actions-row">
              <button className={`result-action-btn${filter==='all'?' active':''}`} onClick={() => setFilter('all')}>All ({questions.length})</button>
              <button className={`result-action-btn${filter==='correct'?' active':''}`} onClick={() => setFilter('correct')}>Correct ({correctCount})</button>
              <button className={`result-action-btn${filter==='incorrect'?' active':''}`} onClick={() => setFilter('incorrect')}>Incorrect ({incorrectCount + skippedCount})</button>
              <div className="result-divider" />
              {incorrectCount + skippedCount > 0 && (
                <button className="result-action-btn danger" onClick={retryIncorrect}>↺ Retry incorrect</button>
              )}
              <button className="result-action-btn" onClick={() => navigate('/setup')}>New exam</button>
              <button className="result-action-btn" onClick={() => navigate('/course/psm1')}>Back to PSM I</button>
            </div>
          </div>

          {/* Review list - ALL options shown */}
          <div className="review-list">
            {filtered.map((q) => {
              const ua = q.userAnswers || []
              return (
                <div key={q.id} className="review-item">
                  <div className="review-item-header">
                    <div className="review-q-text">
                      <span style={{ color:'var(--text3)', marginRight:8, fontSize:12 }}>Q{q.id}</span>
                      {q.text}
                    </div>
                    <span className={`review-status ${q.status}`}>
                      {q.status === 'correct' ? '✓ Correct' : q.status === 'incorrect' ? '✗ Incorrect' : '— Skipped'}
                    </span>
                  </div>

                  {/* Show ALL options */}
                  <div className="review-answers">
                    {q.options.map((opt, oi) => {
                      const isCorrect = q.correctAnswers.includes(oi)
                      const wasSelected = ua.includes(oi)
                      let cls = ''
                      if (isCorrect) cls = 'correct-ans'
                      else if (wasSelected && !isCorrect) cls = 'wrong-ans'
                      else cls = 'neutral'

                      return (
                        <div key={oi} className={`review-answer ${cls}`}>
                          <span style={{ flexShrink:0 }}>
                            {isCorrect ? <CheckSm /> : wasSelected ? <XSm /> : <DotSm />}
                          </span>
                          <span>{opt}</span>
                          {wasSelected && !isCorrect && (
                            <span style={{ marginLeft:'auto', fontSize:11, color:'var(--red)', flexShrink:0 }}>your answer</span>
                          )}
                          {isCorrect && wasSelected && (
                            <span style={{ marginLeft:'auto', fontSize:11, color:'var(--green)', flexShrink:0 }}>your answer ✓</span>
                          )}
                          {isCorrect && !wasSelected && (
                            <span style={{ marginLeft:'auto', fontSize:11, color:'var(--green)', flexShrink:0 }}>correct</span>
                          )}
                        </div>
                      )
                    })}
                  </div>

                  <div className="review-explanation">{q.explanation}</div>
                </div>
              )
            })}
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
function TrophyIcon() { return <svg width="28" height="28" fill="none" stroke="var(--green)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M17 5H7l1 8a4 4 0 008 0l1-8z"/><path d="M7 5H4a1 1 0 00-1 1v2a4 4 0 004 4M17 5h3a1 1 0 011 1v2a4 4 0 01-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function RetryIconSvg() { return <svg width="28" height="28" fill="none" stroke="var(--red)" strokeWidth="1.5" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function CheckSm() { return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> }
function XSm() { return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> }
function DotSm() { return <svg width="13" height="13" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3"/></svg> }
function SunIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/></svg> }
function MoonIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round"/></svg> }

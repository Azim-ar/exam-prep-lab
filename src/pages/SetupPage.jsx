import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SetupPage() {
  const navigate = useNavigate()
  const [timerEnabled, setTimerEnabled] = useState(true)
  const [feedbackMode, setFeedbackMode] = useState('instant')

  function startExam() {
    const setup = { timerEnabled, feedbackMode, bookmarkMode: false }
    sessionStorage.setItem('epl-setup', JSON.stringify(setup))
    navigate('/exam')
  }

  return (
    <div className="page">
      <button className="back-link" onClick={() => navigate('/course/psm1')}>
        <ArrowLeft /> Back to PSM I
      </button>

      <div className="setup-card">
        <div className="setup-title">PSM I — Exam setup</div>
        <div className="setup-sub">80 random questions from a 200-question pool</div>

        <div className="opt-label">Timer</div>
        <div className="opt-row">
          <div
            className={`opt-card${timerEnabled ? ' sel' : ''}`}
            onClick={() => setTimerEnabled(true)}
          >
            <div className="opt-card-title"><ClockIcon /> 60 min timer</div>
            <div className="opt-card-desc">Real exam format</div>
          </div>
          <div
            className={`opt-card${!timerEnabled ? ' sel' : ''}`}
            onClick={() => setTimerEnabled(false)}
          >
            <div className="opt-card-title"><InfinityIcon /> No timer</div>
            <div className="opt-card-desc">Practice slowly</div>
          </div>
        </div>

        <div className="opt-label">Answer feedback</div>
        <div className="opt-row">
          <div
            className={`opt-card${feedbackMode === 'instant' ? ' sel' : ''}`}
            onClick={() => setFeedbackMode('instant')}
          >
            <div className="opt-card-title"><EyeIcon /> Instant feedback</div>
            <div className="opt-card-desc">See right/wrong after each answer</div>
          </div>
          <div
            className={`opt-card${feedbackMode === 'end' ? ' sel' : ''}`}
            onClick={() => setFeedbackMode('end')}
          >
            <div className="opt-card-title"><EyeOffIcon /> At the end</div>
            <div className="opt-card-desc">Answer everything, review later</div>
          </div>
        </div>

        <button className="btn-dark" onClick={startExam} style={{ marginTop: 4 }}>
          Start exam →
        </button>
      </div>
    </div>
  )
}

function ArrowLeft() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ClockIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginRight: 5, verticalAlign: -1 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function InfinityIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginRight: 5, verticalAlign: -1 }}><path d="M12 12c-2-2.5-4-4-6-4a4 4 0 000 8c2 0 4-1.5 6-4zm0 0c2 2.5 4 4 6 4a4 4 0 000-8c-2 0-4 1.5-6 4z"/></svg>
}
function EyeIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginRight: 5, verticalAlign: -1 }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
}
function EyeOffIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginRight: 5, verticalAlign: -1 }}><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
}

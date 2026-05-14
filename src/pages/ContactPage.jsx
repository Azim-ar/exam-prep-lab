import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ maxWidth: 560 }}>
      <div className="section-header" style={{ marginBottom: 24 }}>
        <span className="section-label">Tell me what you think</span>
      </div>
      <div className="feedback-card">
        <div className="feedback-top">
          <div>
            <div className="feedback-title">Got feedback? Found a mistake?</div>
            <div className="feedback-sub">I actually read every message. Takes 30 seconds.</div>
          </div>
          <ChatIcon />
        </div>
        {submitted ? (
          <div style={{ padding:'20px 0', color:'var(--text2)', fontSize:14 }}>
            ✓ Message sent — thanks! I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input className="form-input" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} required />
              <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email:e.target.value})} required />
            </div>
            <textarea className="form-textarea" placeholder="Found a wrong answer? Have a suggestion? Just say hi — whatever's on your mind." value={form.message} onChange={e => setForm({...form, message:e.target.value})} required />
            <button type="submit" className="btn-primary"><SendIcon /> Send message</button>
          </form>
        )}
      </div>
    </div>
  )
}

function ChatIcon() { return <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function SendIcon() { return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> }

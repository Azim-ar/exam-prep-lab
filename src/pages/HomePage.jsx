import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import azimPhoto from '../assets/azim.jpg'

export default function HomePage({ scrollToCourses, scrollToContact }) {
  const navigate = useNavigate()
  const coursesRef = useRef(null)
  const contactRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    if (scrollToCourses && coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    if (scrollToContact && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [scrollToCourses, scrollToContact])

  const bookmarks = JSON.parse(localStorage.getItem('epl-bookmarks-psm1') || '[]')

  function handleSubmit(e) {
    e.preventDefault()
    // In production, connect to a form service like Formspree
    setSubmitted(true)
  }

  const certifications = [
    {
      id: 'psm1',
      name: 'PSM I',
      full: 'Professional Scrum Master I',
      available: true,
      questions: 200,
      time: '60 min',
      pass: '85%',
      path: '/course/psm1'
    },
    { name: 'PSM II', full: 'Professional Scrum Master II', available: false },
    { name: 'PSPO I', full: 'Professional Scrum Product Owner', available: false },
    { name: 'PMP', full: 'Project Management Professional', available: false },
    { name: 'AZ-900', full: 'Azure Fundamentals', available: false },
  ]

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div>
          <p className="hero-eyebrow">Built by a PM, for people like me</p>
          <h1 className="hero-title">
            Hey, I'm Azim.<br />
            <em>Practice smarter,</em><br />
            pass first try.
          </h1>
          <p className="hero-bio">
            Somewhere between my day job as a PM and trying to get certified, I built this. No registration, no ads — just 200 real PSM I questions with a timer and honest explanations. If it helps even one person pass, it was worth building.
          </p>
          <div className="hero-links">
            <a
              href="https://www.linkedin.com/in/azim-arifdzhanov/"
              target="_blank"
              rel="noreferrer"
              className="hero-link primary"
            >
              <LinkedInIcon /> linkedin.com/in/azim-arifdzhanov
            </a>
            <button className="hero-link" onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}>
              <MailIcon /> Get in touch
            </button>
          </div>
        </div>
        <div>
          <div className="photo-box">
            <img
              src={azimPhoto}
              alt="Azim"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
            />
            <div className="photo-badge">
              <div className="badge-dot" />
              <span className="badge-text">PSM I — live now</span>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <div ref={coursesRef}>
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <span className="section-hint">More coming soon</span>
        </div>
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            cert.available ? (
              <div
                key={i}
                className="cert-card available"
                onClick={() => navigate(cert.path)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ position: 'absolute', top: 18, right: 18 }}>
                  <ArrowRight />
                </div>
                <span className="cert-badge avail">Available now</span>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-sub">{cert.full}</div>
                <div className="cert-meta">
                  <span><ListIcon /> {cert.questions} questions</span>
                  <span><ClockIcon /> {cert.time}</span>
                  <span><TargetIcon /> {cert.pass} to pass</span>
                </div>
              </div>
            ) : (
              <div key={i} className="cert-card coming">
                <span className="cert-badge soon">Coming soon</span>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-sub">{cert.full}</div>
              </div>
            )
          ))}
          <div className="cert-more">
            <span style={{ fontSize: 13, color: 'var(--text3)' }}>+ More on the way</span>
          </div>
        </div>
      </div>

      {/* FEEDBACK */}
      <div ref={contactRef}>
        <div className="section-header">
          <span className="section-label">Tell me what you think</span>
        </div>
        <div className="feedback-card">
          <div className="feedback-top">
            <div>
              <div className="feedback-title">Got feedback? Found a mistake?</div>
              <div className="feedback-sub">I actually read every message. Takes 30 seconds.</div>
            </div>
            <ChatBubbleIcon />
          </div>
          {submitted ? (
            <div style={{ padding: '20px 0', color: 'var(--text2)', fontSize: 14 }}>
              ✓ Message sent — thanks! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <textarea
                className="form-textarea"
                placeholder="Found a wrong answer? Have a suggestion? Just say hi — whatever's on your mind."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
              <button type="submit" className="btn-primary">
                <SendIcon /> Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function LinkedInIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
}
function MailIcon() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function ArrowRight() {
  return <svg width="16" height="16" fill="none" stroke="var(--blue)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function ListIcon() {
  return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
}
function ClockIcon() {
  return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function TargetIcon() {
  return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
}
function ChatBubbleIcon() {
  return <svg width="22" height="22" fill="none" stroke="var(--blue)" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function SendIcon() {
  return <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
}

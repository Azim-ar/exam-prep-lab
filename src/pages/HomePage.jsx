import { useNavigate } from 'react-router-dom'
import azimPhoto from '../assets/azim.jpg'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div>
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
            <a href="https://www.linkedin.com/in/azim-arifdzhanov/" target="_blank" rel="noreferrer" className="hero-link primary">
              <LinkedInIcon /> linkedin.com/in/azim-arifdzhanov
            </a>
            <button className="hero-link" onClick={() => navigate('/contact')}>
              <MailIcon /> Get in touch
            </button>
          </div>
        </div>
        <div>
          <div className="photo-box">
            <img src={azimPhoto} alt="Azim" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center' }} />
            <div className="photo-badge">
              <div className="badge-dot" />
              <span className="badge-text">PSM I — live now</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkedInIcon() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> }
function MailIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> }

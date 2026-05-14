import { useNavigate } from 'react-router-dom'

export default function CoursesPage() {
  const navigate = useNavigate()

  const certs = [
    { name:'PSM I', full:'Professional Scrum Master I', available:true, questions:200, time:'60 min', pass:'85%', path:'/course/psm1' },
    { name:'PSM II', full:'Professional Scrum Master II', available:false },
    { name:'PSPO I', full:'Professional Scrum Product Owner', available:false },
    { name:'PMP', full:'Project Management Professional', available:false },
    { name:'AZ-900', full:'Azure Fundamentals', available:false },
  ]

  return (
    <div>
      <div className="section-header">
        <span className="section-label">Certifications</span>
        <span className="section-hint">More coming soon</span>
      </div>
      <div className="cert-grid">
        {certs.map((c, i) => c.available ? (
          <div key={i} className="cert-card available" onClick={() => navigate(c.path)}>
            <div className="cert-arrow"><ArrowRight /></div>
            <span className="cert-badge avail">Available now</span>
            <div className="cert-name">{c.name}</div>
            <div className="cert-sub">{c.full}</div>
            <div className="cert-meta">
              <span><ListIcon /> {c.questions} questions</span>
              <span><ClockIcon /> {c.time}</span>
              <span><TargetIcon /> {c.pass} to pass</span>
            </div>
          </div>
        ) : (
          <div key={i} className="cert-card coming">
            <span className="cert-badge soon">Coming soon</span>
            <div className="cert-name">{c.name}</div>
            <div className="cert-sub">{c.full}</div>
          </div>
        ))}
        <div className="cert-more"><span style={{fontSize:13,color:'var(--text3)'}}>+ More on the way</span></div>
      </div>
    </div>
  )
}

function ArrowRight() { return <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ListIcon() { return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> }
function ClockIcon() { return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> }
function TargetIcon() { return <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> }

import { useNavigate } from 'react-router-dom'
import allQuestions from '../data/index'

export default function CoursePage() {
  const navigate = useNavigate()
  const bookmarks = JSON.parse(localStorage.getItem('epl-bookmarks-psm1') || '[]')

  const bookmarkedQuestions = allQuestions.filter(q => bookmarks.includes(q.id))

  function practiceBookmarked() {
    const setup = { feedbackMode: 'instant', timerEnabled: false, bookmarkMode: true }
    sessionStorage.setItem('epl-setup', JSON.stringify(setup))
    navigate('/exam')
  }

  return (
    <div className="page">
      <button className="back-link" onClick={() => navigate('/')}>
        <ArrowLeft /> Back to courses
      </button>

      <div className="course-grid">
        {/* Course info */}
        <div className="course-info-card">
          <div className="course-eyebrow">Certification</div>
          <div className="course-title">PSM I</div>
          <div className="course-desc">Professional Scrum Master I — the entry-level Scrum certification from Scrum.org</div>
          <div className="course-stats">
            <div className="cs">
              <div className="cs-num">200</div>
              <div className="cs-label">question pool</div>
            </div>
            <div className="cs">
              <div className="cs-num">80</div>
              <div className="cs-label">per exam</div>
            </div>
            <div className="cs">
              <div className="cs-num">85%</div>
              <div className="cs-label">to pass</div>
            </div>
          </div>
          <button className="btn-dark" onClick={() => navigate('/setup')}>
            Start PSM I exam →
          </button>
        </div>

        {/* Bookmarks */}
        <div className="bm-card">
          <div className="bm-header">
            <span className="bm-title">
              <BookmarkIcon /> Saved questions
            </span>
            {bookmarkedQuestions.length > 0 && (
              <span className="bm-count">{bookmarkedQuestions.length} saved</span>
            )}
          </div>

          {bookmarkedQuestions.length === 0 ? (
            <div className="bm-empty">
              No bookmarks yet. Bookmark questions during the exam to review them here.
            </div>
          ) : (
            <div className="bm-list">
              {bookmarkedQuestions.map(q => (
                <div key={q.id} className="bm-item">
                  Q{q.id} — {q.text.length > 70 ? q.text.slice(0, 70) + '…' : q.text}
                </div>
              ))}
            </div>
          )}

          <button
            className="btn-outline"
            onClick={practiceBookmarked}
            disabled={bookmarkedQuestions.length === 0}
            style={{ opacity: bookmarkedQuestions.length === 0 ? 0.4 : 1 }}
          >
            Practice bookmarked →
          </button>

          {bookmarkedQuestions.length > 0 && (
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 10, lineHeight: 1.5 }}>
              Bookmarks are saved locally. PSM I questions stay separate from future courses.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function ArrowLeft() {
  return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
function BookmarkIcon() {
  return <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ display: 'inline', verticalAlign: -2, marginRight: 6 }}><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

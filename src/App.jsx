import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import ContactPage from './pages/ContactPage'
import CoursePage from './pages/CoursePage'
import SetupPage from './pages/SetupPage'
import ExamPage from './pages/ExamPage'
import ResultPage from './pages/ResultPage'

function Sidebar({ collapsed, setCollapsed }) {
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    { label: 'Home', path: '/', icon: <HomeIcon /> },
    { label: 'Courses', path: '/courses', icon: <CoursesIcon /> },
    { label: 'Say Hi', path: '/contact', icon: <ChatIcon /> },
  ]

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <div className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <div className="sidebar-logo">A.</div>
      <nav className="sidebar-nav">
        {links.map(link => (
          <button
            key={link.path}
            className={`sidebar-link${isActive(link.path) ? ' active' : ''}`}
            onClick={() => navigate(link.path)}
            title={collapsed ? link.label : ''}
          >
            {link.icon}
            <span className="sidebar-link-label">{link.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-toggle">
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
    </div>
  )
}

function Layout({ children, collapsed, setCollapsed, theme, setTheme }) {
  return (
    <div className="layout">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`main-content${collapsed ? ' collapsed' : ''}`}>
        <div className="page-inner">
          <div className="topbar">
            <button className="theme-toggle" onClick={() => {
              const next = theme === 'dark' ? 'light' : 'dark'
              setTheme(next)
              document.body.className = next === 'light' ? 'light' : ''
              localStorage.setItem('epl-theme', next)
            }}>
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('epl-theme') || 'dark'
    setTheme(saved)
    document.body.className = saved === 'light' ? 'light' : ''
    const savedCollapsed = localStorage.getItem('epl-sidebar') === 'true'
    setCollapsed(savedCollapsed)
  }, [])

  useEffect(() => {
    localStorage.setItem('epl-sidebar', collapsed)
  }, [collapsed])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/exam" element={<ExamPage collapsed={collapsed} setCollapsed={setCollapsed} />} />
        <Route path="/result" element={<ResultPage collapsed={collapsed} setCollapsed={setCollapsed} />} />
        <Route path="*" element={
          <Layout collapsed={collapsed} setCollapsed={setCollapsed} theme={theme} setTheme={setTheme}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/course/psm1" element={<CoursePage />} />
              <Route path="/setup" element={<SetupPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

function HomeIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function CoursesIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> }
function ChatIcon() { return <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function SunIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/></svg> }
function MoonIcon() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ChevronLeft() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg> }
function ChevronRight() { return <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg> }

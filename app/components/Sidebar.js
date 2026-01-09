'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Projects', path: '/dashboard/projects', icon: '📁' },
  { name: 'Tasks', path: '/dashboard/tasks', icon: '✅' },
  { name: 'Team', path: '/dashboard/team', icon: '👥' },
  { name: 'Calendar', path: '/dashboard/calendar', icon: '📅' },
  { name: 'Reports', path: '/dashboard/reports', icon: '📈' },
  { name: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={styles.sidebar}>
      <div style={styles.logo}>
        <span style={styles.logoIcon}>🚀</span>
        <span style={styles.logoText}>ProjectHub</span>
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link
              key={item.path}
              href={item.path}
              style={{
                ...styles.navItem,
                ...(isActive ? styles.navItemActive : {}),
              }}
            >
              <span style={styles.navIcon}>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div style={styles.userSection}>
        <div style={styles.userAvatar}>JS</div>
        <div style={styles.userInfo}>
          <div style={styles.userName}>John Smith</div>
          <div style={styles.userRole}>Developer</div>
        </div>
      </div>
    </aside>
  )
}

const styles = {
  sidebar: {
    width: '260px',
    height: '100vh',
    backgroundColor: '#1a1d29',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    top: 0,
  },
  logo: {
    padding: '24px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  logoIcon: {
    fontSize: '28px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  nav: {
    flex: 1,
    padding: '20px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    color: '#a0a3b1',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },
  navItemActive: {
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    color: '#667eea',
  },
  navIcon: {
    fontSize: '18px',
  },
  userSection: {
    padding: '20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: '600',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
  },
  userRole: {
    fontSize: '12px',
    color: '#a0a3b1',
  },
}

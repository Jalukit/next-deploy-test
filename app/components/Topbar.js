'use client'

import { useState } from 'react'

export default function Topbar({ title }) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header style={styles.topbar}>
      <div style={styles.left}>
        <h1 style={styles.title}>{title || 'Dashboard'}</h1>
      </div>

      <div style={styles.center}>
        <div style={styles.searchBox}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </div>

      <div style={styles.right}>
        <button style={styles.iconButton}>
          <span>🔔</span>
          <span style={styles.badge}>3</span>
        </button>
        <button style={styles.iconButton}>
          <span>💬</span>
          <span style={styles.badge}>5</span>
        </button>
        <button style={styles.addButton}>
          <span>+ New Project</span>
        </button>
      </div>
    </header>
  )
}

const styles = {
  topbar: {
    height: '70px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  left: {
    flex: 1,
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1a1d29',
    margin: 0,
  },
  center: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f5f6f8',
    borderRadius: '10px',
    padding: '10px 16px',
    width: '100%',
    maxWidth: '400px',
  },
  searchIcon: {
    marginRight: '10px',
    fontSize: '16px',
  },
  searchInput: {
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontSize: '14px',
    width: '100%',
    color: '#1a1d29',
  },
  right: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '12px',
  },
  iconButton: {
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#f5f6f8',
    cursor: 'pointer',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    backgroundColor: '#ef4444',
    color: '#fff',
    fontSize: '10px',
    fontWeight: '600',
    padding: '2px 6px',
    borderRadius: '10px',
  },
  addButton: {
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    marginLeft: '8px',
  },
}

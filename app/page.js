import Link from 'next/link'

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>
          <span style={styles.emoji}>🚀</span> ProjectHub
        </h1>
        <p style={styles.subtitle}>
          Modern Project Management for Teams
        </p>
        <Link href="/dashboard" style={styles.button}>
          Go to Dashboard →
        </Link>
      </div>
    </main>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  hero: {
    textAlign: 'center',
    color: '#fff',
  },
  emoji: {
    fontSize: '48px',
  },
  title: {
    fontSize: '64px',
    fontWeight: '800',
    margin: '0 0 16px 0',
  },
  subtitle: {
    fontSize: '20px',
    opacity: 0.9,
    marginBottom: '32px',
  },
  button: {
    display: 'inline-block',
    padding: '16px 32px',
    backgroundColor: '#fff',
    color: '#667eea',
    borderRadius: '12px',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'transform 0.2s',
  },
}

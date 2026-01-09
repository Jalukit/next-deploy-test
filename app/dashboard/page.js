export default function Dashboard() {
  return (
    <main style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>📊 Dashboard</h1>
      </header>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>Users</h2>
          <p style={styles.number}>1,234</p>
        </div>

        <div style={styles.card}>
          <h2>Revenue</h2>
          <p style={styles.number}>$12,345</p>
        </div>

        <div style={styles.card}>
          <h2>Orders</h2>
          <p style={styles.number}>567</p>
        </div>

        <div style={styles.card}>
          <h2>Growth</h2>
          <p style={styles.number}>+15%</p>
        </div>
      </div>

      <section style={styles.section}>
        <h2>Recent Activity</h2>
        <p style={{ color: '#666' }}>No recent activity</p>
      </section>
    </main>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    marginBottom: '2rem',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  number: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#0070f3',
    margin: '0.5rem 0 0 0',
  },
  section: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
}

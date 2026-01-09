import Topbar from '../components/Topbar'

export default function Dashboard() {
  return (
    <>
      <Topbar title="Dashboard" />
      <div style={styles.content}>
        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          <div style={{ ...styles.statCard, ...styles.statCard1 }}>
            <div style={styles.statIcon}>📁</div>
            <div style={styles.statInfo}>
              <div style={styles.statNumber}>12</div>
              <div style={styles.statLabel}>Active Projects</div>
            </div>
          </div>

          <div style={{ ...styles.statCard, ...styles.statCard2 }}>
            <div style={styles.statIcon}>✅</div>
            <div style={styles.statInfo}>
              <div style={styles.statNumber}>48</div>
              <div style={styles.statLabel}>Completed Tasks</div>
            </div>
          </div>

          <div style={{ ...styles.statCard, ...styles.statCard3 }}>
            <div style={styles.statIcon}>👥</div>
            <div style={styles.statInfo}>
              <div style={styles.statNumber}>8</div>
              <div style={styles.statLabel}>Team Members</div>
            </div>
          </div>

          <div style={{ ...styles.statCard, ...styles.statCard4 }}>
            <div style={styles.statIcon}>⏰</div>
            <div style={styles.statInfo}>
              <div style={styles.statNumber}>5</div>
              <div style={styles.statLabel}>Pending Reviews</div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div style={styles.mainGrid}>
          {/* Recent Projects */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Recent Projects</h2>
              <button style={styles.viewAllBtn}>View All</button>
            </div>
            <div style={styles.projectList}>
              {projects.map((project, index) => (
                <div key={index} style={styles.projectItem}>
                  <div style={{ ...styles.projectColor, backgroundColor: project.color }}></div>
                  <div style={styles.projectInfo}>
                    <div style={styles.projectName}>{project.name}</div>
                    <div style={styles.projectMeta}>{project.tasks} tasks • {project.progress}% complete</div>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={{ ...styles.progressFill, width: `${project.progress}%`, backgroundColor: project.color }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Recent Activity</h2>
            </div>
            <div style={styles.activityList}>
              {activities.map((activity, index) => (
                <div key={index} style={styles.activityItem}>
                  <div style={styles.activityAvatar}>{activity.avatar}</div>
                  <div style={styles.activityContent}>
                    <div style={styles.activityText}>
                      <strong>{activity.user}</strong> {activity.action}
                    </div>
                    <div style={styles.activityTime}>{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Team Members</h2>
            <button style={styles.addMemberBtn}>+ Add Member</button>
          </div>
          <div style={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} style={styles.teamCard}>
                <div style={{ ...styles.teamAvatar, backgroundColor: member.color }}>{member.initials}</div>
                <div style={styles.teamName}>{member.name}</div>
                <div style={styles.teamRole}>{member.role}</div>
                <div style={styles.teamTasks}>{member.tasks} tasks</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

const projects = [
  { name: 'E-commerce Website', tasks: 24, progress: 75, color: '#667eea' },
  { name: 'Mobile App Design', tasks: 18, progress: 45, color: '#f59e0b' },
  { name: 'API Development', tasks: 32, progress: 90, color: '#10b981' },
  { name: 'Dashboard UI', tasks: 12, progress: 60, color: '#ef4444' },
]

const activities = [
  { avatar: 'AK', user: 'Alex Kim', action: 'completed task "Design Homepage"', time: '2 min ago' },
  { avatar: 'SJ', user: 'Sarah Jones', action: 'commented on "API Integration"', time: '15 min ago' },
  { avatar: 'MR', user: 'Mike Ross', action: 'created new project "Mobile App"', time: '1 hour ago' },
  { avatar: 'JD', user: 'Jane Doe', action: 'uploaded 3 files to "Assets"', time: '2 hours ago' },
]

const team = [
  { name: 'Alex Kim', initials: 'AK', role: 'Frontend Dev', tasks: 8, color: '#667eea' },
  { name: 'Sarah Jones', initials: 'SJ', role: 'Designer', tasks: 5, color: '#f59e0b' },
  { name: 'Mike Ross', initials: 'MR', role: 'Backend Dev', tasks: 12, color: '#10b981' },
  { name: 'Jane Doe', initials: 'JD', role: 'PM', tasks: 6, color: '#ef4444' },
]

const styles = {
  content: {
    padding: '24px 32px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    marginBottom: '24px',
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  },
  statCard1: { borderLeft: '4px solid #667eea' },
  statCard2: { borderLeft: '4px solid #10b981' },
  statCard3: { borderLeft: '4px solid #f59e0b' },
  statCard4: { borderLeft: '4px solid #ef4444' },
  statIcon: {
    fontSize: '32px',
  },
  statInfo: {},
  statNumber: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a1d29',
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '20px',
    marginBottom: '24px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1d29',
    margin: 0,
  },
  viewAllBtn: {
    background: 'none',
    border: 'none',
    color: '#667eea',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  projectList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  projectItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  projectColor: {
    width: '8px',
    height: '40px',
    borderRadius: '4px',
  },
  projectInfo: {
    flex: 1,
  },
  projectName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a1d29',
  },
  projectMeta: {
    fontSize: '12px',
    color: '#6b7280',
  },
  progressBar: {
    width: '100px',
    height: '6px',
    backgroundColor: '#e5e7eb',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  activityItem: {
    display: 'flex',
    gap: '12px',
  },
  activityAvatar: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#667eea',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: '600',
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: '14px',
    color: '#1a1d29',
  },
  activityTime: {
    fontSize: '12px',
    color: '#6b7280',
  },
  addMemberBtn: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#667eea',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  },
  teamCard: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f9fafb',
    borderRadius: '12px',
  },
  teamAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 auto 12px',
  },
  teamName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a1d29',
  },
  teamRole: {
    fontSize: '12px',
    color: '#6b7280',
    marginBottom: '8px',
  },
  teamTasks: {
    fontSize: '12px',
    color: '#667eea',
    fontWeight: '500',
  },
}

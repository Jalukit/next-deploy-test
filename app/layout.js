import './globals.css'

export const metadata = {
  title: 'ProjectHub - Project Management',
  description: 'Modern Project Management Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Dashboard',
  description: 'Next.js Dashboard App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

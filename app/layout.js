import Sidebar from '@/components/layouts/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Buddha Mode',
  description: 'A simple yet powerful productivity tool.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <>
        <Sidebar/>
        {children}
        </>
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'TechTinker Lab | Software Development & STEM Curriculum Design',
  description: 'TechTinker Lab provides software development, digital solutions, and STEM curriculum design services for project-based client work in the UK.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NeuroNote',
  description: 'Productivity app built for me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <section>
            <div>
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  )
}
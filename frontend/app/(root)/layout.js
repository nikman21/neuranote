import '../globals.css'
import { Inter } from 'next/font/google'
import LeftSidebar from '../components/LeftSidebar';
import Topbar from '../components/DashboardComponents/topBar';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NeuroNote',
  description: 'Productivity app built for me',
}

export default function RootLayout({ children }) {
  return (
    <>
        <Topbar />
        <main className="flex flex-row">
          <LeftSidebar />

          <section className="main-container">
            <div className='w-full max-w-4xl'>
              {children}
            </div>
          </section>
        </main>
    </>
    
  )
}

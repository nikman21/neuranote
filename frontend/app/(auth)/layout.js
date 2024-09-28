import Head from 'next/head';
import Link from 'next/link';
import '../globals.css'
import Navbar from '../components/HomeComponents/navbar/navbar';
import Footer from '../components/HomeComponents/Footer';

export const metadata = {
    title: 'NeuroNote',
    description: 'Productivity app built for me',
}

export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex flex-row">
                <section className="main-container">
                    <div className='w-full max-w-4xl'>
                        {children}
                    </div>
                </section>
            </main>
            <Footer />

        </>
    );
};


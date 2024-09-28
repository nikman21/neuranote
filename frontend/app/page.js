'use client';

import Head from 'next/head';
import Navbar from './components/HomeComponents/navbar/navbar';
import Hero from './components/HomeComponents/hero';
import Features from './components/HomeComponents/feature';
import HowItWorks from './components/HomeComponents/howItWorks';
import CTASection from './components/HomeComponents/CTASection';
import Footer from './components/HomeComponents/Footer';



export default function Home() {


  return (
    <div className="h-screen">
      <Head>
        <title>Productivity App</title>
      </Head>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <CTASection />
        <Footer />
    </div>
  );
}
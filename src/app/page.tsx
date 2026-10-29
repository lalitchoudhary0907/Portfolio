'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Journey from '@/components/Journey';
import BeyondCode from '@/components/BeyondCode';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CertificateModal from '@/components/CertificateModal';
import Toast from '@/components/Toast';

export default function Home() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects onOpenCertModal={() => setIsCertModalOpen(true)} />
        <Skills />
        <Achievements onOpenCertModal={() => setIsCertModalOpen(true)} />
        <Journey />
        <BeyondCode />
        <Contact onShowToast={showToast} />
      </main>
      <Footer />

      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
      />

      <Toast message={toastMessage} />
    </>
  );
}

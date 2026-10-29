'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'skills', 'achievements', 'journey', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-[var(--bg-backdrop)] backdrop-blur-md border-b border-[var(--border-subtle)] z-50 transition-colors">
      <div className="container-custom h-full flex items-center justify-between">
        
        {/* Brand wordmark */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Lalit Choudhary Homepage">
          <span className="font-mono font-extrabold text-xl tracking-wider text-[var(--text-pure)] flex items-center">
            {portfolioData.personal.shortName}
            <span className="text-[var(--crimson-600)] text-2xl leading-none">.</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-mono text-[0.7rem] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse-dot" />
            <span>{portfolioData.personal.education.tag}</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-[0.9rem] font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-[var(--text-pure)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-pure)]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--crimson-600)] rounded" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold font-mono rounded bg-[var(--crimson-subtle)] border border-[var(--crimson-border)] text-[#ff9ca8] hover:bg-[var(--crimson-600)] hover:border-[var(--crimson-600)] hover:text-white hover:shadow-[0_4px_14px_var(--crimson-glow)] transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--border-medium)] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-medium)] px-6 py-5 flex flex-col gap-3 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base text-[var(--text-secondary)] hover:text-[var(--text-pure)] py-2 border-b border-[var(--border-ultra-subtle)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold font-mono rounded bg-[var(--crimson-600)] text-white"
          >
            <Mail className="w-4 h-4" />
            <span>Connect</span>
          </a>
        </div>
      )}
    </header>
  );
}

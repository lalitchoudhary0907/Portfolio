'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] py-12 sm:py-16">
      <div className="container-custom">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-10 border-b border-[var(--border-subtle)]">
          <div>
            <h2 className="text-xl font-mono font-bold tracking-wider text-[var(--text-pure)] mb-1">
              {personal.name.toUpperCase()}
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              {personal.identity}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--crimson-border)] hover:text-[var(--crimson-500)] hover:bg-[var(--crimson-subtle)] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--crimson-border)] hover:text-[var(--crimson-500)] hover:bg-[var(--crimson-subtle)] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.contact.email}`}
              className="w-10 h-10 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--crimson-border)] hover:text-[var(--crimson-500)] hover:bg-[var(--crimson-subtle)] transition-colors"
              aria-label="Email Lalit"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8">
          <p className="font-mono text-xs text-[var(--text-muted)]">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            {personal.signoff}
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-secondary)] px-3 py-1.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-canvas)] hover:text-white hover:border-[var(--border-medium)] transition-colors"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

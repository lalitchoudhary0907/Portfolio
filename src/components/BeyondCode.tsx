'use client';

import React from 'react';
import { Music } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function BeyondCode() {
  const { beyondCode } = portfolioData;

  return (
    <section className="section-custom" id="beyond">
      <div className="container-custom">
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          <div className="bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded-xl p-8 flex flex-col items-center text-center">
            <Music className="w-12 h-12 text-rose-500 mb-3" />
            <h4 className="text-lg font-bold text-white mb-2">Acoustic &amp; Vocal Balance</h4>
            <div className="flex gap-2 mt-2">
              {beyondCode.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="section-label">Beyond Code</span>
            <h3 className="text-2xl font-bold text-[var(--text-pure)] mb-3">
              {beyondCode.title}
            </h3>
            {beyondCode.paragraphs.map((p, i) => (
              <p key={i} className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { ArrowRight, Mail, BookOpen, Award, Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-[calc(100vh-72px)] mt-[72px] flex items-center relative py-16 md:py-24" id="hero">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 font-mono text-[0.8125rem] uppercase tracking-wider text-[var(--crimson-500)] px-3 py-1 bg-[var(--crimson-subtle)] border border-[var(--crimson-border)] rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse-dot" />
              <span>Software Development &bull; AI &bull; Quantitative Finance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-[var(--text-pure)] mb-3 uppercase">
              {personal.name}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold leading-snug text-zinc-200 mb-4 max-w-xl">
              Building at the intersection of <span className="text-[#ff8b97]">code</span>,{' '}
              <span className="text-[#ff8b97]">intelligence</span>, and{' '}
              <span className="text-[#ff8b97]">ideas</span>.
            </p>

            <p className="text-base sm:text-[1.0625rem] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
              {personal.shortIntro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a href="#projects" className="btn btn-primary w-full sm:w-auto">
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn btn-secondary w-full sm:w-auto">
                <span>Get In Touch</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Quantitative & Engineering Signals */}
            <div className="flex flex-wrap gap-5 pt-4 border-t border-[var(--border-subtle)] w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.725rem] font-mono text-[var(--text-muted)] uppercase tracking-wide">
                    Academic Path
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    {personal.education.tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[var(--gold-subtle)] border border-[var(--gold-border)] text-[var(--gold-400)]">
                  <Award className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.725rem] font-mono text-[var(--text-muted)] uppercase tracking-wide">
                    Quant Milestone
                  </span>
                  <span className="text-sm font-semibold text-[var(--gold-400)]">
                    WorldQuant BRAIN Gold
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded flex items-center justify-center bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.725rem] font-mono text-[var(--text-muted)] uppercase tracking-wide">
                    Focus Areas
                  </span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    Python, C++, AI Systems
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Research Studio Visual Card */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="w-full max-w-[440px] bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--crimson-600)] to-[var(--gold-500)]" />

              <div className="flex items-center justify-between pb-3.5 border-b border-[var(--border-subtle)] mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--crimson-500)] shadow-[0_0_10px_var(--crimson-500)]" />
                  <span className="font-mono text-[0.78rem] font-semibold tracking-wider text-[var(--text-secondary)]">
                    QUANTITATIVE_LAB // ALPHA_SIGNAL
                  </span>
                </div>
                <span className="font-mono text-[0.7rem] px-2 py-0.5 rounded bg-[var(--gold-subtle)] border border-[var(--gold-border)] text-[var(--gold-400)] font-semibold">
                  BRAIN GOLD
                </span>
              </div>

              {/* Mathematical Signal SVG */}
              <div className="w-full h-44 mb-5 bg-[var(--bg-canvas)] rounded border border-[var(--border-ultra-subtle)] flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 380 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <line x1="20" y1="30" x2="360" y2="30" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3"/>
                  <line x1="20" y1="75" x2="360" y2="75" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3"/>
                  <line x1="20" y1="120" x2="360" y2="120" stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3"/>
                  <line x1="20" y1="165" x2="360" y2="165" stroke="rgba(255,255,255,0.08)"/>

                  {/* Math Watermark */}
                  <text x="30" y="55" fill="rgba(255,255,255,0.08)" fontFamily="JetBrains Mono, monospace" fontSize="11">
                    &alpha;(t) = rank(&Delta;P / &sigma;) - rank(Volume)
                  </text>
                  <text x="30" y="75" fill="rgba(212,175,55,0.22)" fontFamily="JetBrains Mono, monospace" fontSize="10">
                    IC = corr(signal, return) &gt; 0.05
                  </text>

                  {/* Alpha Signal Path */}
                  <path
                    d="M 20 145 C 70 140, 100 125, 140 100 C 180 75, 210 95, 250 65 C 290 35, 320 50, 360 25"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Secondary Benchmark Curve */}
                  <path
                    d="M 20 155 C 80 150, 130 140, 180 130 C 230 120, 280 115, 360 95"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Gold Milestone Node */}
                  <circle cx="250" cy="65" r="5" fill="#070709" stroke="#d4af37" strokeWidth="2" />
                  <circle cx="250" cy="65" r="2" fill="#d4af37" />
                  <text x="258" y="62" fill="#d4af37" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">
                    Sharpe 2.18
                  </text>

                  {/* Signal End Point */}
                  <circle cx="360" cy="25" r="4" fill="#dc2626" />
                  <circle cx="360" cy="25" r="8" stroke="#dc2626" strokeOpacity="0.3" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Visual Card Footer */}
              <div className="grid grid-cols-3 gap-2 pt-3.5 border-t border-[var(--border-subtle)]">
                <div className="flex flex-col">
                  <span className="font-mono text-[0.675rem] text-[var(--text-muted)] uppercase">Hypothesis</span>
                  <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">Price &bull; Volume</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.675rem] text-[var(--text-muted)] uppercase">Platform</span>
                  <span className="font-mono text-sm font-semibold text-[var(--gold-400)]">WQ BRAIN</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.675rem] text-[var(--text-muted)] uppercase">Discipline</span>
                  <span className="font-mono text-sm font-semibold text-[#ff7f8e]">Systematic</span>
                </div>
              </div>

              <span className="absolute bottom-1.5 right-2 font-mono text-[0.625rem] text-[var(--text-faint)] tracking-wider">
                [LAT. 28.61 &bull; LNG. 77.20]
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

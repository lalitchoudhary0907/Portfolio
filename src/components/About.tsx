'use client';

import React from 'react';
import { Code, Brain, TrendingUp, Users } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  const { personal, aboutPillars } = portfolioData;

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-[var(--crimson-500)]" />;
      case 1:
        return <Brain className="w-5 h-5 text-[var(--crimson-500)]" />;
      case 2:
        return <TrendingUp className="w-5 h-5 text-[var(--gold-400)]" />;
      default:
        return <Users className="w-5 h-5 text-[var(--crimson-500)]" />;
    }
  };

  return (
    <section className="section-custom" id="about">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-12">
          <span className="section-label">Academic & Technical Profile</span>
          <h2 className="section-title">Driven by curiosity, grounded in rigorous fundamentals.</h2>
          <p className="section-desc">
            A first-year perspective on learning modern software architecture, exploring intelligent agents, and practicing quantitative research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium text-zinc-100 leading-relaxed">
              {personal.longIntro[0]}
            </p>

            <div className="p-5 bg-[var(--bg-surface)] border-l-4 border-[var(--crimson-600)] rounded-r-md text-zinc-200 italic text-[0.975rem] my-1">
              &ldquo;{personal.longIntro[1]}&rdquo;
            </div>

            <p className="text-[var(--text-secondary)] text-base leading-relaxed">
              {personal.longIntro[2]}
            </p>
          </div>

          {/* Structured Pillars Column */}
          <div className="flex flex-col gap-3.5">
            {aboutPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`p-5 rounded-lg border transition-all duration-200 flex gap-4 items-start ${
                  pillar.isGold
                    ? 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-card)] hover:border-[var(--gold-border)] hover:translate-x-1'
                    : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-[var(--bg-card)] hover:border-[var(--border-medium)] hover:translate-x-1'
                }`}
              >
                <div
                  className={`w-10 h-10 min-w-10 rounded flex items-center justify-center bg-[var(--bg-canvas)] border ${
                    pillar.isGold
                      ? 'border-[var(--gold-border)] bg-[var(--gold-subtle)]'
                      : 'border-[var(--border-subtle)]'
                  }`}
                >
                  {getPillarIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-pure)] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

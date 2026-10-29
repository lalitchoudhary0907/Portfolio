'use client';

import React from 'react';
import { Terminal, Brain, TrendingUp, Cpu, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Skills() {
  const { skills, coreStrengths } = portfolioData;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-4 h-4 text-[var(--crimson-500)]" />;
      case 1:
        return <Brain className="w-4 h-4 text-[var(--crimson-500)]" />;
      case 2:
        return <TrendingUp className="w-4 h-4 text-[var(--gold-400)]" />;
      default:
        return <Cpu className="w-4 h-4 text-[var(--crimson-500)]" />;
    }
  };

  return (
    <section className="section-custom" id="skills">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-12">
          <span className="section-label">Capabilities &amp; Competencies</span>
          <h2 className="section-title">Technical Skills &amp; Foundations</h2>
          <p className="section-desc">
            An honest breakdown of current proficiencies and technical toolkits, without exaggerated percentages or arbitrary progress bars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skills.map((category, idx) => (
            <div
              key={category.title}
              className={`bg-[var(--bg-surface)] border rounded-xl p-6 transition-colors ${
                category.isGold
                  ? 'border-[rgba(212,175,55,0.25)] hover:border-[var(--gold-border)]'
                  : 'border-[var(--border-subtle)] hover:border-[var(--border-medium)]'
              }`}
            >
              <div className="flex items-center gap-3 pb-3 border-b border-[var(--border-subtle)] mb-5">
                <div
                  className={`w-8 h-8 rounded flex items-center justify-center bg-[var(--bg-canvas)] border ${
                    category.isGold ? 'border-[var(--gold-border)] text-[var(--gold-400)]' : 'border-[var(--border-subtle)]'
                  }`}
                >
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="text-base font-semibold text-[var(--text-pure)]">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col gap-1 p-3 rounded bg-[var(--bg-canvas)] border border-[var(--border-ultra-subtle)]"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-sm text-[var(--text-primary)]">{skill.name}</span>
                      <span
                        className={`font-mono text-[0.7rem] px-2 py-0.5 rounded border ${
                          skill.highlightTag === 'gold'
                            ? 'bg-[var(--gold-subtle)] border-[var(--gold-border)] text-[var(--gold-400)]'
                            : skill.highlightTag === 'active'
                            ? 'bg-[var(--crimson-subtle)] border-[var(--crimson-border)] text-[#ff9ca8]'
                            : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {skill.proficiencyTag}
                      </span>
                    </div>
                    <span className="text-xs text-[var(--text-muted)] leading-relaxed">{skill.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths Cloud */}
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-6 sm:p-8">
          <h3 className="text-base font-semibold text-[var(--text-pure)] mb-2">
            Core Problem-Solving Strengths
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Qualities that define my approach to engineering challenges and team collaboration:
          </p>

          <div className="flex flex-wrap gap-2.5">
            {coreStrengths.map((strength) => (
              <div
                key={strength}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded-md text-sm text-[var(--text-secondary)]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--crimson-500)] flex-shrink-0" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import { portfolioData, JourneyStep } from '@/data/portfolioData';

export default function Journey() {
  const { journeySteps } = portfolioData;

  return (
    <section className="section-custom" id="journey">
      <div className="container-custom">
        
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 px-2.5 py-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Current Trajectory</span>
            </span>
            <h2 className="section-title">Learning Journey</h2>
            <p className="section-desc">
              Transparent, ongoing areas of growth and engineering goals for my B.Tech journey.
            </p>
          </div>

          {/* Stepped Stream */}
          <div className="flex flex-col relative pl-2 sm:pl-0">
            {/* Connecting Timeline Line */}
            <div className="absolute top-4 bottom-8 left-[19px] w-[2px] bg-[var(--border-medium)] -z-0" />

            {journeySteps.map((step: JourneyStep) => (
              <div key={step.number} className="flex gap-6 pb-9 relative group">
                {/* Node */}
                <div className="w-10 h-10 min-w-10 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--border-medium)] flex items-center justify-center font-mono text-xs font-bold text-[var(--text-secondary)] z-10 group-hover:border-[var(--crimson-600)] group-hover:bg-[var(--crimson-900)] group-hover:text-white group-hover:shadow-[0_0_14px_var(--crimson-glow)] transition-all">
                  {step.number}
                </div>

                {/* Step Body */}
                <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-5 sm:p-6 w-full group-hover:bg-[var(--bg-card)] group-hover:border-[var(--border-medium)] group-hover:translate-x-1 transition-all">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-xs uppercase text-[var(--crimson-500)] tracking-wider">
                      {step.category}
                    </span>
                    <span className="font-mono text-[0.7rem] text-[var(--text-muted)]">
                      {step.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-pure)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
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

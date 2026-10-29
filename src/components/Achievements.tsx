'use client';

import React from 'react';
import { Award, CheckCircle2, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface AchievementsProps {
  onOpenCertModal: () => void;
}

export default function Achievements({ onOpenCertModal }: AchievementsProps) {
  const { achievement } = portfolioData;

  return (
    <section className="section-custom" id="achievements">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-12">
          <span className="section-label">Verified Recognition</span>
          <h2 className="section-title">Major Achievement</h2>
          <p className="section-desc">
            Recognized for quantitative research rigor and signal modeling on the WorldQuant BRAIN platform.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[rgba(212,175,55,0.06)] via-[var(--bg-surface)] to-[var(--bg-surface)] border border-[var(--gold-border)] rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Watermark */}
          <span className="absolute top-2 right-6 font-mono text-[6rem] sm:text-[9rem] font-black text-[rgba(212,175,55,0.03)] pointer-events-none select-none leading-none">
            GOLD
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            
            {/* Achievement Info */}
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold-subtle)] border border-[var(--gold-border)] text-[var(--gold-400)] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                <Award className="w-4 h-4" />
                <span>{achievement.badge}</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-pure)] mb-1">
                {achievement.title}
              </h3>
              <p className="font-mono text-sm text-[var(--gold-400)] mb-5">
                {achievement.organization}
              </p>

              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-6">
                {achievement.description}
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {achievement.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold-400)] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <button onClick={onOpenCertModal} className="btn btn-gold">
                <FileText className="w-4 h-4" />
                <span>View Recognition Document</span>
              </button>
            </div>

            {/* Graphic Certificate Preview Card */}
            <div className="bg-[var(--bg-canvas)] border border-[var(--gold-border)] rounded-xl p-8 flex flex-col items-center justify-center text-center relative min-h-[260px] shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]">
              <Award className="w-14 h-14 text-[var(--gold-400)] mb-3" />
              <span className="font-mono text-base font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1">
                WorldQuant BRAIN
              </span>
              <span className="text-xs text-[var(--text-muted)] mb-5">
                Gold Level Research Achievement
              </span>
              <button
                onClick={onOpenCertModal}
                className="text-xs font-mono font-semibold px-4 py-2 rounded bg-[var(--gold-subtle)] border border-[var(--gold-border)] text-[var(--gold-400)] hover:bg-[var(--gold-500)] hover:text-black transition-all"
              >
                Inspect Credential
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

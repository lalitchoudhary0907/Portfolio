'use client';

import React, { useEffect } from 'react';
import { X, Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({ isOpen, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certModalTitle"
    >
      <div
        className="bg-[var(--bg-surface)] border border-[var(--gold-border)] rounded-2xl max-w-xl w-full p-6 sm:p-10 shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-white hover:border-[var(--border-active)] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="border-2 border-dashed border-[rgba(212,175,55,0.4)] bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.08)_0%,var(--bg-canvas)_80%)] rounded-xl p-6 sm:p-8 text-center mt-2">
          <Award className="w-12 h-12 text-[var(--gold-400)] mx-auto mb-3" />
          
          <div className="font-mono text-xs font-bold tracking-widest text-[var(--gold-400)] mb-1">
            RECOGNITION CERTIFICATE &bull; LEVEL GOLD
          </div>
          
          <h3 className="text-2xl font-extrabold text-[var(--text-pure)] mb-1" id="certModalTitle">
            WorldQuant BRAIN
          </h3>
          
          <p className="text-base font-semibold text-[var(--gold-500)] mb-4">
            Presented to {portfolioData.personal.name}
          </p>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto mb-6">
            In recognition of attaining Gold Level status through rigorous formulation of quantitative predictive alphas, backtesting discipline, and continuous hypothesis evaluation across equity market datasets.
          </p>

          <div className="flex justify-between items-center font-mono text-[0.7rem] text-[var(--text-muted)] border-t border-[var(--border-subtle)] pt-4">
            <span>Global Research Division</span>
            <span className="text-[var(--gold-400)]">Verified Achievement</span>
          </div>
        </div>
      </div>
    </div>
  );
}

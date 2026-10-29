'use client';

import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      className="fixed bottom-6 right-6 bg-[var(--bg-elevated)] border border-[var(--crimson-border)] text-white px-4 py-3 rounded font-mono text-xs shadow-2xl flex items-center gap-2 z-[200] animate-in fade-in slide-in-from-bottom-5 duration-200"
      role="status"
      aria-live="polite"
    >
      <Check className="w-3.5 h-3.5 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
}

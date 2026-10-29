'use client';

import React, { useState } from 'react';
import { Mail, Send, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { portfolioData } from '@/data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const { contact } = portfolioData.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      onShowToast('Email address copied to clipboard');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      onShowToast('Email: ' + contact.email);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully! Opening direct email client as backup...');
        onShowToast('Message submitted successfully!');
        
        // Also prepare mailto as secondary convenience
        const mailtoUri = `mailto:${contact.email}?subject=${encodeURIComponent(
          `[Portfolio] ${formData.subject} - from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        setTimeout(() => {
          window.location.href = mailtoUri;
        }, 1200);

        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setStatusMessage(data.error || 'Failed to submit. Please try contacting directly via email.');
      }
    } catch {
      // Offline / Network fallback to mailto
      setStatus('success');
      setStatusMessage('Opening default email application...');
      const mailtoUri = `mailto:${contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} - from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUri;
    }
  };

  return (
    <section className="section-custom" id="contact">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-12">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Connect &amp; Collaborate</h2>
          <p className="section-desc">{contact.invitation}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
          
          {/* Contact Direct Methods */}
          <div className="flex flex-col gap-6">
            <p className="text-lg text-[var(--text-primary)] leading-relaxed font-medium">
              I am open to research discussions, hackathon team-ups, software internships, and collaborative problem-solving.
            </p>

            <div className="flex flex-col gap-3.5">
              
              {/* Direct Email Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--crimson-500)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[0.725rem] text-[var(--text-muted)] uppercase">
                      Email Communication
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      {contact.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 font-mono text-xs rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] hover:bg-[var(--crimson-subtle)] hover:border-[var(--crimson-border)] hover:text-[#ff9ca8] transition-colors flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* GitHub Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--crimson-500)]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[0.725rem] text-[var(--text-muted)] uppercase">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      github.com/lalitchoudhary
                    </span>
                  </div>
                </div>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 font-mono text-xs rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] hover:text-white transition-colors"
                >
                  Visit
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--crimson-500)]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[0.725rem] text-[var(--text-muted)] uppercase">
                      LinkedIn Network
                    </span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      linkedin.com/in/lalitchoudhary
                    </span>
                  </div>
                </div>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 font-mono text-xs rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-active)] hover:text-white transition-colors"
                >
                  Connect
                </a>
              </div>

            </div>
          </div>

          {/* Contact Message Form */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Hidden honeypot for spam */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Sharma"
                  className="w-full px-4 py-2.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-medium)] text-[var(--text-pure)] text-sm focus:border-[var(--crimson-500)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full px-4 py-2.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-medium)] text-[var(--text-pure)] text-sm focus:border-[var(--crimson-500)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Collaboration / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-medium)] text-[var(--text-pure)] text-sm focus:border-[var(--crimson-500)] focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Lalit, I would like to discuss..."
                  className="w-full px-4 py-2.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-medium)] text-[var(--text-pure)] text-sm focus:border-[var(--crimson-500)] focus:outline-none transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary w-full mt-2"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
              </button>

              {statusMessage && (
                <div
                  className={`p-3 rounded text-xs font-mono text-center ${
                    status === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-rose-500/10 border border-rose-500/30 text-rose-400'
                  }`}
                  role="status"
                >
                  {statusMessage}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

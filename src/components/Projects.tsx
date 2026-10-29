'use client';

import React from 'react';
import { ArrowUpRight, Award, Lock, Smartphone, Radio, Compass, BarChart2 } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolioData';

interface ProjectsProps {
  onOpenCertModal?: () => void;
}

export default function Projects({ onOpenCertModal }: ProjectsProps) {
  const { projects, exploringProjects } = portfolioData;

  return (
    <section className="section-custom" id="projects">
      <div className="container-custom">
        
        <div className="max-w-2xl mb-12">
          <span className="section-label">Selected Technical Work</span>
          <h2 className="section-title">Projects & Applied Research</h2>
          <p className="section-desc">
            A transparent look at practical software initiatives and systematic quantitative exploration.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="flex flex-col gap-10 mb-16">
          {projects.map((project: Project) => (
            <article
              key={project.id}
              className={`bg-[var(--bg-surface)] border rounded-2xl overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] ${
                project.isFeaturedResearch
                  ? 'border-[rgba(212,175,55,0.25)] hover:border-[var(--gold-border)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.08)]'
                  : 'border-[var(--border-subtle)] hover:border-[var(--border-medium)] hover:shadow-2xl'
              }`}
            >
              {/* Project Main Details */}
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`font-mono text-xs uppercase tracking-wide ${
                        project.isFeaturedResearch ? 'text-[var(--gold-500)]' : 'text-[var(--crimson-500)]'
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          project.status === 'Gold Level Verified'
                            ? 'bg-[var(--gold-400)] shadow-[0_0_6px_var(--gold-glow)]'
                            : 'bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.5)]'
                        }`}
                      />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-pure)] mb-2">
                    {project.title}
                  </h3>

                  <div className="font-mono text-xs text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                    <span>Role / Context:</span>
                    <span
                      className={`font-medium ${
                        project.isFeaturedResearch ? 'text-[var(--gold-400)]' : 'text-[#ff9ca8]'
                      }`}
                    >
                      {project.role}
                    </span>
                  </div>

                  <p className="text-[var(--text-secondary)] text-[0.95rem] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-col gap-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-baseline gap-2.5 text-sm text-zinc-300">
                        <span
                          className={`font-mono font-bold ${
                            project.isFeaturedResearch ? 'text-[var(--gold-500)]' : 'text-[var(--crimson-500)]'
                          }`}
                        >
                          &bull;
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                  {project.id === 'quant-alpha' ? (
                    <button
                      onClick={onOpenCertModal}
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded bg-[var(--gold-subtle)] border border-[var(--gold-border)] text-[var(--gold-400)] hover:bg-[var(--gold-500)] hover:text-black transition-all"
                    >
                      <Award className="w-4 h-4" />
                      <span>Inspect Gold Milestone</span>
                    </button>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
                      title="Repository in active internal development"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Private Repo &bull; Active Iteration</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Aside Workflow Schematic */}
              <div className="bg-[var(--bg-canvas)] border-t lg:border-t-0 lg:border-l border-[var(--border-subtle)] p-6 sm:p-8 flex flex-col justify-center">
                {project.workflow && (
                  <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-5">
                    <div className="flex justify-between items-center font-mono text-[0.725rem] text-[var(--text-muted)] uppercase mb-4">
                      <span>{project.workflow.title}</span>
                      <span>{project.workflow.version}</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {project.workflow.steps.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 font-mono text-xs text-[var(--text-secondary)] p-2.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-ultra-subtle)]"
                        >
                          {project.isFeaturedResearch ? (
                            <BarChart2 className="w-4 h-4 text-[var(--gold-400)] flex-shrink-0" />
                          ) : (
                            <Smartphone className="w-4 h-4 text-[var(--crimson-500)] flex-shrink-0" />
                          )}
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ==================== CURRENTLY EXPLORING ==================== */}
        <div className="pt-10 border-t border-dashed border-[var(--border-medium)]">
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Currently Exploring &bull; Learning Roadmap</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-pure)] mb-1">
              Future Technical Ventures
            </h3>
            <p className="section-desc text-sm">
              Clearly separated upcoming projects that represent active learning goals rather than completed work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {exploringProjects.map((item) => (
              <div
                key={item.title}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl p-6 hover:bg-[var(--bg-card)] hover:border-[var(--border-medium)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs text-[var(--text-muted)]">{item.domain}</span>
                    <span className="font-mono text-[0.7rem] px-2 py-0.5 rounded bg-[var(--bg-canvas)] text-slate-400 border border-[var(--border-subtle)]">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-pure)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.7rem] px-2 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

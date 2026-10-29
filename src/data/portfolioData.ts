/**
 * ============================================================================
 * LALIT CHOUDHARY — CENTRALIZED PORTFOLIO DATA MODULE
 * ============================================================================
 * Single source of truth for all personal details, verified links, projects,
 * current skills, active learning goals, achievements, and interests.
 *
 * NOTE: Content is strictly separated from presentation.
 * Verified real information:
 * - Name: Lalit Choudhary
 * - Education: First-year B.Tech in Computer Science and AI
 * - Email: lalitchoudhary0907@gmail.com
 * - LinkedIn: https://www.linkedin.com/in/lalitchoudhary0907
 * - GitHub: https://github.com/lalitchoudhary0907
 * - Primary Achievement: WorldQuant BRAIN Gold Level
 * - Primary Project: CoreAlert (Research, Problem-Solving & Project Coordination)
 * ============================================================================
 */

export interface ProjectWorkflow {
  title: string;
  version: string;
  steps: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  status: 'In Development' | 'Gold Level Verified' | 'Ongoing Research';
  isFeaturedResearch?: boolean;
  description: string;
  highlights: string[];
  techStack: string[];
  workflow?: ProjectWorkflow;
  links?: {
    github?: string;
    demo?: string;
    actionLabel?: string;
    actionHref?: string;
  };
}

export interface ExploringProject {
  domain: string;
  status: string;
  title: string;
  description: string;
  techStack: string[];
}

export interface SkillItem {
  name: string;
  proficiencyTag: string;
  highlightTag?: 'active' | 'gold' | 'default';
  note: string;
}

export interface SkillCategory {
  title: string;
  isGold?: boolean;
  skills: SkillItem[];
}

export interface LearningGoal {
  id: string;
  domain: string;
  goal: string;
  description: string;
  targetTimeline: string;
}

export interface JourneyStep {
  number: string;
  category: string;
  status: string;
  title: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: 'Lalit Choudhary',
    shortName: 'LALIT',
    headline: 'Building at the intersection of code, intelligence, and ideas.',
    identity: 'Aspiring Software Developer | AI Enthusiast | Quantitative Research Explorer',
    education: {
      degree: 'B.Tech in Computer Science and Artificial Intelligence',
      year: 'First-Year Student',
      tag: '1st Year B.Tech CSE & AI',
      status: 'Open to Research & Collaborations',
    },
    shortIntro:
      "I'm a Computer Science and Artificial Intelligence student exploring the intersection of software engineering, intelligent systems, and quantitative research. I enjoy solving problems, experimenting with technology, and turning ideas into practical solutions.",
    longIntro: [
      "I'm Lalit Choudhary, a first-year B.Tech student specializing in Computer Science and Artificial Intelligence. I'm building my foundation in programming, exploring AI-powered applications, and learning how quantitative methods can be applied to financial markets.",
      'I believe in learning through experimentation, building practical projects, and continuously improving my technical abilities. I value collaborative problem-solving, open-source development, and honest engineering.',
      'Rather than viewing software as isolated syntax, I treat every project as an opportunity to test hypotheses, coordinate with peers, and understand the architectural decisions behind reliable applications.',
    ],
    contact: {
      email: 'lalitchoudhary0907@gmail.com',
      github: 'https://github.com/lalitchoudhary0907',
      githubHandle: 'lalitchoudhary0907',
      linkedin: 'https://www.linkedin.com/in/lalitchoudhary0907',
      linkedinHandle: 'lalitchoudhary0907',
      invitation: "Have an interesting idea, a project to discuss, or an opportunity to collaborate? Let's connect.",
    },
    signoff: 'Built with an emphasis on clarity, discipline, and continuous learning.',
  },

  /**
   * Areas of Interest & Strategic Pillars
   */
  interests: [
    {
      label: 'Programming',
      items: ['Python', 'C++', 'Algorithmic Problem Solving', 'Object-Oriented Design'],
    },
    {
      label: 'Artificial Intelligence',
      items: ['Intelligent Systems', 'Machine Learning Foundations', 'Applied AI Workflows'],
    },
    {
      label: 'Quantitative Finance',
      items: ['Systematic Alpha Research', 'Signal Formulation', 'Financial Hypothesis Testing'],
    },
    {
      label: 'Collaborative Engineering',
      items: ['Software Development', 'Hackathons', 'Teamwork', 'Open Source'],
    },
  ],

  aboutPillars: [
    {
      title: 'Programming & Software Engineering',
      desc: 'Establishing clean algorithmic habits with C++ and Python, focusing on structured data types, modular design, and robust logic flow.',
      isGold: false,
    },
    {
      title: 'Artificial Intelligence & Practical Applications',
      desc: 'Investigating machine learning foundations, intelligent workflows, and applying modern AI models to solve real-world user challenges.',
      isGold: false,
    },
    {
      title: 'Quantitative Finance & Systematic Research',
      desc: 'Formulating alpha hypotheses, evaluating financial signals on WorldQuant BRAIN, and studying backtesting metrics such as Sharpe and turnover.',
      isGold: true,
    },
    {
      title: 'Hackathons, Teamwork & Open-Source',
      desc: 'Collaborating with peers on fast-paced project builds, actively preparing for technical hackathons, and participating in developer communities.',
      isGold: false,
    },
  ],

  /**
   * Verified Projects
   * Note: Only genuine project roles and verified architectures are represented.
   */
  projects: [
    {
      id: 'corealert',
      title: 'CoreAlert — Emergency SOS Application',
      category: 'Software Development // Emergency Systems',
      role: 'Research, Problem-Solving & Project Coordination',
      status: 'In Development',
      isFeaturedResearch: false,
      description:
        'A student-focused emergency assistance mobile system designed to trigger swift SOS alerts under stressful or dangerous circumstances. Explores hardware button shortcuts, instant GPS location broadcasting, automated audio recording, and reliable backend synchronization for student safety.',
      highlights: [
        'Hardware Trigger: Investigating discrete volume-button sequence activation without unlocking the device.',
        'Real-time Telemetry: Precise GPS coordinates broadcasted with live timestamping to trusted emergency contacts.',
        'Automated Audio Capture: Ambient audio recording initiated on activation for situational awareness.',
      ],
      techStack: ['Supabase', 'PostgreSQL Auth', 'Geolocation API', 'Audio Streaming', 'RESTful Architecture'],
      workflow: {
        title: 'ACTIVATION WORKFLOW',
        version: 'SYS_V1',
        steps: [
          '1. Physical Volume Trigger',
          '2. GPS Geo-locking',
          '3. Background Audio Buffer',
          '4. Supabase SOS Dispatch',
        ],
      },
    },
    {
      id: 'quant-alpha',
      title: 'Quantitative Alpha Research',
      category: 'Quantitative Finance // Alpha Formulation',
      role: 'WorldQuant BRAIN Platform • Gold Level Explorer',
      status: 'Gold Level Verified',
      isFeaturedResearch: true,
      description:
        'An exploration of systematic mathematical alpha research and market signal evaluation on the WorldQuant BRAIN institutional platform. Focused on formulating cross-sectional price-momentum and volume-based signals across historical equities datasets.',
      highlights: [
        'Hypothesis Testing: Formulating mathematical expressions predicting relative asset price movements.',
        'Performance Metrics: Rigorous evaluation against Information Coefficient (IC), Sharpe Ratio, and turnover constraints.',
        'Risk Neutralization: Implementing sub-industry neutralization to reduce market exposure and idiosyncratic volatility.',
      ],
      techStack: [
        'WorldQuant BRAIN',
        'Quantitative Modeling',
        'Python & Vectorized Ops',
        'Statistical Backtesting',
        'Market Data Signals',
      ],
      workflow: {
        title: 'SIGNAL VALIDATION SUITE',
        version: 'WQ_BRAIN',
        steps: [
          'Sharpe > 1.50 Threshold',
          'Turnover < 70% Neutralization',
          'Sub-industry Weight Neutral',
          'WorldQuant BRAIN Gold Status',
        ],
      },
      links: {
        actionLabel: 'Inspect Gold Milestone',
        actionHref: '#achievements',
      },
    },
  ] as Project[],

  /**
   * Future Exploration (Roadmap - clearly distinct from completed work)
   */
  exploringProjects: [
    {
      domain: 'AI Systems',
      status: 'Conceptual Phase',
      title: 'Academic Knowledge Graph & Synthesis',
      description:
        'An intelligent search assistant designed to ingest research papers, index key mathematical theorems, and enable context-aware query synthesis using vector search.',
      techStack: ['Python', 'Embeddings', 'Vector DB'],
    },
    {
      domain: 'Quantitative Systems',
      status: 'Prototyping',
      title: 'Local Systematic Backtesting Engine',
      description:
        'A modular Python framework to test fundamental equity trading rules locally with realistic transaction costs, slippage modeling, and drawdowns visualization.',
      techStack: ['Python', 'NumPy', 'Pandas'],
    },
    {
      domain: 'Developer Tooling',
      status: 'Design Phase',
      title: 'Collaborative Code Review Utility',
      description:
        'A minimalist developer command-line interface tool to simplify peer pull request inspections, automated lint summaries, and markdown snippet sharing.',
      techStack: ['C++ / CLI', 'Git API', 'Unix Shell'],
    },
  ] as ExploringProject[],

  /**
   * CURRENT TECHNICAL SKILLS (Honestly represented, no progress bars or percentages)
   */
  skills: [
    {
      title: 'Programming Languages',
      skills: [
        {
          name: 'Python',
          proficiencyTag: 'Core Language',
          highlightTag: 'active',
          note: 'Primary language for scripting, data manipulation, algorithm design, and quantitative signal formulation.',
        },
        {
          name: 'C++',
          proficiencyTag: 'Foundational / Academic',
          highlightTag: 'default',
          note: 'Understanding of object-oriented principles, algorithmic problem solving, and memory management concepts.',
        },
      ],
    },
    {
      title: 'AI & Intelligent Systems',
      skills: [
        {
          name: 'Artificial Intelligence Fundamentals',
          proficiencyTag: 'Academic Coursework',
          highlightTag: 'default',
          note: 'State-space exploration, search algorithms, heuristic evaluation, and logical inference.',
        },
        {
          name: 'Machine Learning Exploration',
          proficiencyTag: 'Active Exploration',
          highlightTag: 'default',
          note: 'Supervised learning concepts, linear/logistic regression, and model evaluation metrics.',
        },
      ],
    },
    {
      title: 'Quantitative Research',
      isGold: true,
      skills: [
        {
          name: 'Alpha Formula Formulation',
          proficiencyTag: 'Gold Level Verified',
          highlightTag: 'gold',
          note: 'Cross-sectional ranking, decay weighting, momentum and mean-reversion signals on WorldQuant BRAIN.',
        },
        {
          name: 'Financial Signal Evaluation',
          proficiencyTag: 'Practicing',
          highlightTag: 'default',
          note: 'Evaluating Information Coefficient (IC), Sharpe ratio interpretation, and turnover reduction.',
        },
      ],
    },
    {
      title: 'Tools & Environments',
      skills: [
        {
          name: 'Git & GitHub',
          proficiencyTag: 'Daily Workflow',
          highlightTag: 'default',
          note: 'Version control, branch management, pull requests, and collaborative repository hygiene.',
        },
        {
          name: 'macOS Terminal & VS Code',
          proficiencyTag: 'Primary Environment',
          highlightTag: 'default',
          note: 'Command-line navigation, script execution, environment management, and editor setup.',
        },
      ],
    },
  ] as SkillCategory[],

  /**
   * ACTIVE LEARNING GOALS (Clearly differentiated from established competencies)
   */
  learningGoals: [
    {
      id: 'goal-1',
      domain: 'Systems & Algorithms',
      goal: 'Advanced Data Structures & Competitive Programming in C++',
      description: 'Strengthening mastery of trees, graphs, dynamic programming, and low-level memory efficiency.',
      targetTimeline: 'Ongoing Year 1',
    },
    {
      id: 'goal-2',
      domain: 'Artificial Intelligence',
      goal: 'Deep Learning & Neural Network Implementations from Scratch',
      description: 'Progressing from ML basics to understanding backpropagation, convolutional layers, and transformers in PyTorch.',
      targetTimeline: 'Next Milestone',
    },
    {
      id: 'goal-3',
      domain: 'Quantitative Methods',
      goal: 'Statistical Arbitrage & Risk Parity Strategies',
      description: 'Studying multi-factor risk models, portfolio optimization constraints, and statistical signal filtering.',
      targetTimeline: 'Continuous Practice',
    },
    {
      id: 'goal-4',
      domain: 'Open Source & Community',
      goal: 'First Major Open-Source Contributions & Collegiate Hackathons',
      description: 'Actively preparing to contribute to public developer repositories and competing in collaborative hackathons.',
      targetTimeline: 'Upcoming',
    },
  ] as LearningGoal[],

  /**
   * Problem-Solving Attributes
   */
  coreStrengths: [
    'Analytical & Logical Thinking',
    'Hypothesis-Driven Research',
    'Disciplined Problem Solving',
    'Active Collaboration & Teamwork',
    'Curiosity & Continuous Improvement',
  ],

  /**
   * Primary Verified Achievement
   */
  achievement: {
    title: 'Gold Level Quantitative Researcher',
    badge: 'WorldQuant BRAIN • Gold Level',
    organization: 'WorldQuant BRAIN Global Research Platform',
    description:
      'Achieved Gold Level status by formulating, backtesting, and submitting high-performing quantitative alpha models. The journey involved continuous mathematical hypothesis testing across equity market universes, optimizing risk-adjusted performance, and adhering to strict institutional constraints.',
    points: [
      'Qualified through progressive milestone tiers by submitting statistically valid predictive alphas.',
      'Analyzed market anomalies, factor neutralization, and multi-year simulation drawdowns.',
      'Demonstrated deep quantitative curiosity alongside first-year engineering coursework.',
    ],
  },

  /**
   * Editorial Learning Journey
   */
  journeySteps: [
    {
      number: '01',
      category: 'Fundamentals',
      status: 'In Progress',
      title: 'Strengthening Programming Fundamentals',
      description:
        'Developing proficiency in object-oriented programming with C++ and idiomatic Python. Deepening understanding of time and space complexity, memory layouts, and essential algorithms.',
    },
    {
      number: '02',
      category: 'Intelligence',
      status: 'Active Exploration',
      title: 'Exploring AI & Software Development',
      description:
        'Experimenting with practical machine learning frameworks, neural network basics, and building intelligent web-connected applications that solve day-to-day problems.',
    },
    {
      number: '03',
      category: 'Quantitative',
      status: 'Continuous Practice',
      title: 'Practicing Quantitative Research',
      description:
        'Iterating on financial signal expressions on WorldQuant BRAIN, investigating momentum signals, cross-asset correlations, and developing a disciplined mathematical mindset.',
    },
    {
      number: '04',
      category: 'Engineering',
      status: 'Collaboration',
      title: 'Participating in Collaborative Technical Projects',
      description:
        'Coordinating with student teams on practical software such as CoreAlert, learning Git branch workflows, peer review communication, and backend integration.',
    },
    {
      number: '05',
      category: 'Community',
      status: 'Upcoming Goal',
      title: 'Preparing for Hackathons & Open-Source',
      description:
        'Targeting national collegiate hackathons, exploring open-source repositories to make constructive first contributions, and engaging with active developer communities.',
    },
  ] as JourneyStep[],

  /**
   * Beyond Code (Personal Balance)
   */
  beyondCode: {
    title: 'Music, Singing & Guitar',
    tags: ['Guitar', 'Singing', 'Music Theory'],
    paragraphs: [
      'Outside of academics and algorithms, I find balance and focus in music. Playing the acoustic guitar and singing offers a creative counterweight to engineering logic.',
      'Much like writing clean code or formulating quantitative signals, music demands rhythm, disciplined practice, attentive listening, and an appreciation for nuance.',
    ],
  },
};

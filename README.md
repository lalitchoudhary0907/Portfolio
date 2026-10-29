# Lalit Choudhary — Personal Portfolio

A polished, responsive personal portfolio for **Lalit Choudhary**, first-year B.Tech Computer Science and Artificial Intelligence student exploring software engineering, intelligent systems, and quantitative finance.

## 🚀 Stack & Technologies

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Library:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Obsidian & Crimson custom design system
- **Typography:** Plus Jakarta Sans (Headings/Body) & JetBrains Mono (Code/Math notation)
- **Backend:** Next.js Route Handler (`/api/contact`) with validation & honeypot spam protection

---

## 📁 Project Structure

```text
Portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts  # Backend Route Handler for contact messages
│   │   ├── globals.css           # Design system tokens, grid backgrounds, animations
│   │   ├── layout.tsx            # Root layout with fonts and metadata
│   │   └── page.tsx              # Assembles all portfolio sections
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation with scroll spy & mobile drawer
│   │   ├── Hero.tsx              # Text-led hero with quantitative SVG signal graph
│   │   ├── About.tsx             # Academic profile & 4 core pillars
│   │   ├── Projects.tsx          # CoreAlert, Quantitative Alpha Research & Roadmap
│   │   ├── Skills.tsx            # Honest competency categories
│   │   ├── Achievements.tsx      # WorldQuant BRAIN Gold showcase
│   │   ├── Journey.tsx           # 5-step ongoing learning trajectory
│   │   ├── BeyondCode.tsx        # Music, singing & acoustic guitar balance
│   │   ├── Contact.tsx           # Contact form (API connected) & email copy
│   │   ├── Footer.tsx            # Dynamic year, sign-off & back-to-top
│   │   ├── CertificateModal.tsx  # Accessible recognition document viewer
│   │   ├── Toast.tsx             # Action notifications
│   │   └── icons/BrandIcons.tsx  # Custom SVG GitHub & LinkedIn icons
│   └── data/
│       └── portfolioData.ts      # Single source of truth for personal info & projects
├── public/                       # Static public assets
├── legacy-backup/                # Preserved static HTML & CSS implementation
├── package.json
└── tsconfig.json
```

---

## 🛠️ Development & Running Locally

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site.

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

---

## ✏️ How to Update Your Content

All personal information, project descriptions, skills, and links can be updated in a single file:
👉 **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

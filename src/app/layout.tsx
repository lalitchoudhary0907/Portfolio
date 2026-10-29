import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lalit Choudhary — Computer Science, AI & Quantitative Research",
  description:
    "Personal portfolio of Lalit Choudhary, a first-year B.Tech Computer Science and AI student exploring software development, artificial intelligence, and quantitative finance.",
  authors: [{ name: "Lalit Choudhary" }],
  keywords: [
    "Lalit Choudhary",
    "Computer Science",
    "Artificial Intelligence",
    "Quantitative Finance",
    "WorldQuant BRAIN Gold",
    "Software Developer",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    title: "Lalit Choudhary — Portfolio",
    description:
      "Computer Science & AI student exploring software engineering, intelligent systems, and quantitative research.",
    siteName: "Lalit Choudhary Portfolio",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%230e0e12'/><text x='16' y='21' font-family='sans-serif' font-weight='800' font-size='15' fill='%23dc2626' text-anchor='middle'>L</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#070709",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] antialiased font-sans">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

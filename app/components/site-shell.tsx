'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

type SiteShellProps = {
  children: ReactNode;
};

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gia.tattooz?igsh=dms0MDRqNWowc25y',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@astoriaink',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M14 3v10.1a4.6 4.6 0 1 1-4.6-4.6c.42 0 .82.06 1.2.17v3.15a1.65 1.65 0 1 0 1.2 1.58V3h2.2c.3 2.12 1.55 3.48 3.8 4.1v3.05A7.05 7.05 0 0 1 14 8.63Z" />
      </svg>
    ),
  },
];

export default function SiteShell({ children }: SiteShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="brand">
            Gia Tattoos
          </Link>
          <button
            className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            id="primary-navigation"
            className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Primary"
          >
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/faq" onClick={() => setIsMenuOpen(false)}>Tattoo FAQ</Link>
            <Link href="/#location" onClick={() => setIsMenuOpen(false)}>Location</Link>
            <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>Book tattoo</Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-inner">
            <div>
              <p className="footer-brand">Gia at Astoria Ink</p>
              <p className="footer-note">Blackwork • Micro realism • Black & grey</p>
            </div>
            <nav className="social-links" aria-label="Social links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer noopener" aria-label={link.label}>
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>
          <p className="footer-credit">Website build by AI Visibility.</p>
        </div>
      </footer>
    </main>
  );
}

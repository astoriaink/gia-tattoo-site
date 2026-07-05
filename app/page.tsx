'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import SiteShell from './components/site-shell';

const specialties = [
  {
    title: 'Blackwork',
    text: 'Bold blackwork tattoos with strong silhouettes, clean contrast, and graphic animal detail.',
  },
  {
    title: 'Micro Realism',
    text: 'Detailed micro realism tattoos in Christchurch, built with soft shading and precision.',
  },
  {
    title: 'Black & Grey',
    text: 'Soft black and grey realism for animal tattoos, pet-inspired pieces, and tonal detail.',
  },
];

const artistHighlights = [
  'Black and grey tattoos with soft realism and tonal control',
  'Micro realism tattoos with soft black and grey shading',
  'Animal tattoos, wildlife pieces, and pet portrait concepts',
  'Blackwork pieces with bold contrast and clean readable shapes',
];

const latestWork = [
  {
    title: 'Blackwork crocodile',
    image: '/astoria-gia-full/dc8a88_e9874b583b8d4d50b9ffdcb5fd342adaf003.jpg',
  },
  {
    title: 'Soft micro detail',
    image: '/astoria-gia-full/dc8a88_4a72d34ce5284c4982280c6307a58a76~mv2.png',
  },
  {
    title: 'Animal tattoo realism',
    image: '/astoria-gia-full/dc8a88_66f2606471514a5b9eb58345fbb81c83~mv2.png',
  },
  {
    title: 'Black & grey detail',
    image: '/astoria-gia-full/dc8a88_ca301c3370484f2b854abe6203348c3b~mv2.jpg',
  },
];

const processSteps = [
  {
    title: 'Consultation',
    text: 'Share your idea, placement, size, references, and any meaning behind the piece.',
  },
  {
    title: 'Design',
    text: 'Gia refines the direction into a tattoo-ready concept with balance and longevity in mind.',
  },
  {
    title: 'Appointment',
    text: 'Your piece is tattooed at Astoria Ink with a calm, precise, and considered process.',
  },
];

const supplyBrands = [
  {
    name: 'Kwadron',
    logo: '/brand-logos/kwadron.png',
    url: 'https://www.kwadron.pl/en/',
    className: 'logo-invert',
  },
  {
    name: 'EZ Tattoo',
    logo: '/brand-logos/ez-tattoo.png',
    url: 'https://eztattoosupply.com/',
  },
  {
    name: 'Toochi Supplies',
    logo: '/brand-logos/toochi.png',
    url: 'https://www.toochitattoo.com/',
  },
  {
    name: 'Bohemian Tattoo Arts',
    logo: '/brand-logos/bohemian.svg',
    url: 'https://www.bohemiantattooarts.com/',
  },
  {
    name: 'Dynamic Color',
    logo: '/brand-logos/dynamic-color.png',
    url: 'https://dynamiccolor.com/',
  },
];

export default function HomePage() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-scroll]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <SiteShell>
      <section id="top" className="hero hero-showcase">
        <div className="parallax-layer parallax-line line-one" aria-hidden="true" />
        <div className="parallax-layer parallax-line line-two" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal reveal-1">Christchurch tattoo artist • Astoria Ink</span>
            <h1 className="kinetic-title" aria-label="Gia. Christchurch tattoo artist for black and grey tattoos, micro realism, animal tattoos, and blackwork at Astoria Ink.">
              {['Gia', 'Black & grey', 'Micro realism', 'Blackwork'].map(
                (line, index) => (
                  <span key={line} style={{ '--word-index': index } as CSSProperties}>
                    {line}
                  </span>
                ),
              )}
            </h1>
            <p className="reveal reveal-2">
              Gia is a Christchurch tattoo artist at Astoria Ink, focused on black and
              grey tattoos, micro realism, blackwork, and animal tattoo concepts.
            </p>
            <div className="hero-actions">
              <Link href="/book-now" className="btn btn-primary reveal reveal-3">
                Book consult
              </Link>
              <a
                href="https://www.instagram.com/gia.tattooz?igsh=dms0MDRqNWowc25y"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary reveal reveal-3"
              >
                View Instagram
              </a>
            </div>
          </div>

          <div className="hero-meta reveal reveal-4">
            <span>Black & grey</span>
            <span>Micro realism</span>
            <span>Animal tattoos</span>
          </div>
        </div>
      </section>

      <section id="specialties">
        <div className="container">
          <div className="section-title" data-scroll>
            <h2>Specialties</h2>
            <p>Christchurch tattoo work built around realism, detail, texture, and longevity.</p>
          </div>
          <div className="grid-3">
            {specialties.map((item, index) => (
              <article
                key={item.title}
                className="panel"
                data-scroll
                style={{ '--scroll-delay': `${index * 90}ms` } as CSSProperties}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="latest">
        <div className="container">
          <div className="section-title section-title-row" data-scroll>
            <div>
              <span className="eyebrow">Latest from Gia</span>
              <h2>Recent black & grey tattoos, blackwork, micro realism, and animal detail.</h2>
            </div>
            <a
              href="https://www.instagram.com/gia.tattooz?igsh=dms0MDRqNWowc25y"
              target="_blank"
              rel="noreferrer noopener"
              className="text-link"
            >
              View Instagram
            </a>
          </div>
          <div className="work-strip">
            {latestWork.map((item, index) => (
              <a
                key={item.title}
                href="https://www.instagram.com/gia.tattooz?igsh=dms0MDRqNWowc25y"
                target="_blank"
                rel="noreferrer noopener"
                className="work-card"
                data-scroll
                style={{ '--scroll-delay': `${index * 80}ms` } as CSSProperties}
              >
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div className="section-title" data-scroll>
            <span className="eyebrow">Booking process</span>
            <h2>Simple, collaborative, and considered.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="process-card"
                data-scroll
                style={{ '--scroll-delay': `${index * 90}ms` } as CSSProperties}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="about-box" data-scroll>
            <figure className="artist-portrait">
              <img src="/artist/gia-main-portrait.jpg" alt="Gia tattooing at Astoria Ink" />
            </figure>
            <div className="artist-story">
              <span className="eyebrow">About Gia</span>
              <p className="quote">
                “Every tattoo is approached with patience, care, and a strong focus on quality.”
              </p>
              <p>
                Gia is a Christchurch tattoo artist at Astoria Ink with a focus on black
                and grey tattoos, micro realism, blackwork, and animal tattoo
                concepts. Her work suits clients looking for soft realism, pet-inspired
                tattoos, wildlife ideas, and small detailed pieces that need careful
                placement, contrast, and longevity.
              </p>
              <h3>What she brings</h3>
              <ul className="list">
                {artistHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="supplies" className="supplies-section">
        <div className="container">
          <div className="supply-banner" data-scroll>
            <div className="supply-copy">
              <span className="eyebrow">Studio supplies</span>
              <h2>Professional brands Gia works with.</h2>
            </div>
            <div className="brand-marquee" aria-label="Professional supply brands">
              <div className="brand-track">
                {[...supplyBrands, ...supplyBrands].map((brand, index) => (
                  <a
                    key={`${brand.name}-${index}`}
                    href={brand.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`brand-logo ${brand.className ?? ''}`}
                  >
                    <img src={brand.logo} alt={brand.name} />
                    <span>{brand.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location">
        <div className="container">
          <div className="location-card" data-scroll>
            <div>
              <span className="eyebrow">Christchurch studio</span>
              <h2>Gia tattoos from Astoria Ink.</h2>
              <p>
                The SQ, Level 2, 270 St Asaph Street, Christchurch Central 8011.
              </p>
            </div>
            <div className="location-actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Astoria%20Ink%20270%20St%20Asaph%20Street%20Christchurch"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-secondary"
              >
                Open maps
              </a>
              <Link href="/book-now" className="btn btn-primary">
                Book tattoo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

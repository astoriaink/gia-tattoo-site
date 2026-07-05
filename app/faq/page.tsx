import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '../components/site-shell';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gia-tattoo-site.vercel.app').replace(/\/$/, '');

const faqs = [
  {
    question: 'Does Gia do black and grey tattoos in Christchurch?',
    answer:
      'Yes. Gia tattoos from Astoria Ink in Christchurch and focuses on soft black and grey work, micro realism, blackwork, and carefully shaded realistic pieces.',
  },
  {
    question: 'Does Gia do animal tattoos?',
    answer:
      'Yes. Animal tattoo concepts are a strong fit for Gia’s black and grey realism style, including wildlife ideas, pet-inspired tattoos, and smaller animal pieces that need fine detail and soft shading.',
  },
  {
    question: 'Can Gia tattoo pet-inspired designs or pet portraits?',
    answer:
      'Gia can work with pet-inspired tattoo ideas and reference photos. Clear, well-lit images are best because they help capture the animal’s expression, markings, fur direction, and overall character.',
  },
  {
    question: 'What styles does Gia specialise in?',
    answer:
      'Gia’s main styles are black and grey tattoos, micro realism, blackwork, delicate lettering, and animal tattoo concepts. Her work is suited to clients wanting detail, softness, contrast, and a considered design.',
  },
  {
    question: 'Is micro realism good for animal tattoos?',
    answer:
      'Micro realism can work well for smaller animal tattoos, but the design needs enough room for important details like eyes, fur texture, shadows, and contrast. Gia can help decide what size will age best.',
  },
  {
    question: 'How big should a black and grey animal tattoo be?',
    answer:
      'The right size depends on the animal, placement, and level of detail. Pet portraits, blackwork animals, and realistic wildlife tattoos usually need enough space for shading, contrast, and key features to stay clear over time.',
  },
  {
    question: 'What reference photos should I send for an animal tattoo?',
    answer:
      'Send clear photos in natural light, ideally from a few angles. For pet-inspired tattoos, include close-up images of the face, markings, and expression, plus any notes about what you want the tattoo to feel like.',
  },
  {
    question: 'Where is Gia based?',
    answer:
      'Gia tattoos from Astoria Ink in Christchurch Central. The studio is at The SQ, Level 2, 270 St Asaph Street, Christchurch 8011.',
  },
  {
    question: 'How do I book a tattoo with Gia?',
    answer:
      'Use the tattoo booking form and include your idea, placement, approximate size, preferred style, timing, reference notes, and reference images. Astoria Ink can then review the request and reply by email.',
  },
  {
    question: 'How much does a tattoo with Gia cost?',
    answer:
      'Pricing depends on size, placement, detail, style, and appointment time. Black and grey realism, animal tattoos, and micro realism pieces are best quoted after Gia can review the idea and references.',
  },
  {
    question: 'Can Gia help refine my tattoo idea?',
    answer:
      'Yes. Gia works with clients to shape a tattoo idea into a design that suits the body, placement, size, contrast, and long-term clarity, especially for detailed black and grey or micro realism work.',
  },
  {
    question: 'What should I include in the booking form?',
    answer:
      'Include your name, email, tattoo placement, approximate size, style, timing, description of the idea, and reference notes. For animal tattoos, reference photos are especially helpful.',
  },
];

export const metadata: Metadata = {
  title: 'Gia Tattoo FAQ | Black & Grey, Blackwork & Micro Realism',
  description:
    'FAQ for booking with Gia at Astoria Ink Christchurch, including black and grey tattoos, blackwork, animal tattoos, pet-inspired designs, micro realism, reference photos, sizing, and booking.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteUrl}/faq#faq`,
    url: `${siteUrl}/faq`,
    name: 'Gia Tattoo FAQ',
    isPartOf: {
      '@id': `${siteUrl}/#website`,
    },
    about: {
      '@id': `${siteUrl}/#gia`,
    },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero faq-hero">
        <div className="container">
          <div className="hero-card faq-intro">
            <span className="eyebrow">Gia tattoo FAQ</span>
            <h1>Tattoo questions, answered.</h1>
            <p>
              Answers for clients booking black and grey tattoos, animal tattoo ideas,
              pet-inspired pieces, and micro realism with Gia at Astoria Ink Christchurch.
            </p>
            <div className="hero-actions">
              <Link href="/book-now" className="btn btn-primary">
                Book tattoo
              </Link>
              <Link href="/#location" className="btn btn-secondary">
                View location
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

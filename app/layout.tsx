import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gia-tattoo-site.vercel.app').replace(/\/$/, '');
const astoriaInkUrl = 'https://www.astoriaink.co.nz/';
const giaInstagramUrl = 'https://www.instagram.com/gia.tattooz/';
const studioAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'The SQ, Level 2, 270 St Asaph Street',
  addressLocality: 'Christchurch Central',
  addressRegion: 'Canterbury',
  postalCode: '8011',
  addressCountry: 'NZ',
};

export const metadata: Metadata = {
  title: {
    default: 'Gia Tattoo Artist Christchurch | Black & Grey Micro Realism',
    template: '%s | Gia Tattoos',
  },
  description:
    'Gia is a Christchurch tattoo artist at Astoria Ink specialising in black and grey tattoos, micro realism, blackwork, animal tattoos, and pet-inspired designs.',
  keywords: [
    'Astoria Ink',
    'tattoo artist Christchurch',
    'tattoo chch',
    'Christchurch tattoo artist',
    'animal tattoos Christchurch',
    'animal tattoo artist Christchurch',
    'pet portrait tattoo Christchurch',
    'blackwork tattoos',
    'micro realism tattoos',
    'black and grey tattoos',
    'Christchurch tattoos',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gia Tattoo Artist Christchurch | Black & Grey Micro Realism',
    description:
      'Black and grey tattoos, micro realism, blackwork, animal tattoos, and pet-inspired work by Gia at Astoria Ink in Christchurch.',
    type: 'website',
    url: siteUrl,
    siteName: 'Gia Tattoos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gia Tattoo Artist Christchurch | Black & Grey Micro Realism',
    description:
      'Black and grey tattoos, micro realism, blackwork, animal tattoos, and pet-inspired work by Gia at Astoria Ink in Christchurch.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Gia Tattoos',
      url: siteUrl,
      inLanguage: 'en-NZ',
      description:
        'Artist-focused tattoo portfolio and booking site for Gia, a Christchurch tattoo artist at Astoria Ink.',
      publisher: {
        '@id': `${siteUrl}/#gia`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#gia`,
      name: 'Gia',
      url: siteUrl,
      image: `${siteUrl}/artist/gia-main-portrait.jpg`,
      jobTitle: 'Tattoo Artist',
      worksFor: {
        '@id': `${astoriaInkUrl}#tattoo-parlor`,
      },
      workLocation: {
        '@id': `${astoriaInkUrl}#tattoo-parlor`,
      },
      sameAs: [giaInstagramUrl],
      knowsAbout: [
        'Black and grey tattoos',
        'Blackwork tattoos',
        'Micro realism tattoos',
        'Animal tattoos',
        'Pet-inspired tattoos',
        'Christchurch tattoos',
      ],
      mainEntityOfPage: {
        '@id': `${siteUrl}/#website`,
      },
    },
    {
      '@type': 'TattooParlor',
      '@id': `${astoriaInkUrl}#tattoo-parlor`,
      name: 'Astoria Ink',
      url: astoriaInkUrl,
      address: studioAddress,
      areaServed: {
        '@type': 'City',
        name: 'Christchurch',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

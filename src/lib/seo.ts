import type { Metadata } from 'next';
export function meta(title: string, description: string, path = ''): Metadata {
  const base = process.env.SITE_URL || 'http://localhost:3000';
  return { title, description, alternates: { canonical: `${base}${path}` }, openGraph: { title, description, url: `${base}${path}`, type: 'website', locale: 'es_ES' } };
}

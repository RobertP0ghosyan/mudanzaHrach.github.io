import type { Metadata } from 'next';
import './globals.css';
import { getBusiness } from '@/lib/business-config';
import { BusinessProvider } from '@/components/BusinessProvider';
import { Header, Footer, FloatingContact } from '@/components/Shell';
export async function generateMetadata():Promise<Metadata>{const business=await getBusiness();return {title:{default:business.name,template:`%s | ${business.name}`},description:business.tagline,metadataBase:new URL(process.env.SITE_URL||'http://localhost:3000')}}
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const config=await getBusiness();
  return <html lang="es"><body><BusinessProvider value={config}><Header />{children}<Footer /><FloatingContact /></BusinessProvider></body></html>;
}

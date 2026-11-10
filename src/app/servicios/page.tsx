import Link from 'next/link';
import { ArrowUpRight, Box, BriefcaseBusiness, Home, MapPin, PackageCheck, Truck } from 'lucide-react';
import { getBusiness } from '@/lib/business-config';
import { SectionCTA } from '@/components/SectionCTA';
import { meta } from '@/lib/seo';
export const metadata=meta('Servicios de mudanzas','Conoce los servicios disponibles para particulares, oficinas, traslados locales y nacionales.','/servicios');
const icons=[Home,BriefcaseBusiness,MapPin,Truck,Box,PackageCheck];
export default async function Services(){const activeServices=(await getBusiness()).services.filter(s=>s.active);return <main><section className="page-hero"><div className="container"><span className="eyebrow">NUESTROS SERVICIOS</span><h1>Tu mudanza, a tu manera.</h1><p>Elige los servicios que necesitas y dinos los detalles del traslado. Confirmaremos la disponibilidad al revisar tu solicitud.</p></div></section><section className="content-section"><div className="container services-grid">{activeServices.map((s,i)=>{const Icon=icons[i]||Box;return <Link key={s.slug} href={`/servicios/${s.slug}`} className="service-card"><span className="service-icon"><Icon/></span><h3>{s.title}</h3><p>{s.description}</p><span className="card-arrow"><ArrowUpRight/></span></Link>})}</div></section><SectionCTA/></main>}

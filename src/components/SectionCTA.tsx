import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { PhoneLink, WhatsAppLink } from './Shell';
import { getBusiness } from '@/lib/business-config';
export async function SectionCTA() { const business=await getBusiness();return <section className="final-cta"><div className="container final-cta-inner"><div><span className="eyebrow light">EMPECEMOS POR LO ESENCIAL</span><h2>Cuéntanos qué necesitas mover.</h2><p>Prepara los datos de tu mudanza y envíanoslos por WhatsApp para solicitar una propuesta.</p></div><div className="final-actions"><Link href="/presupuesto" className="btn btn-white">Solicitar presupuesto <ArrowUpRight size={18}/></Link><WhatsAppLink className="btn btn-outline-white"><MessageCircle size={18}/> Hablar por WhatsApp</WhatsAppLink><PhoneLink className="final-phone"><Phone size={17}/> {business.phone}</PhoneLink></div></div></section>; }


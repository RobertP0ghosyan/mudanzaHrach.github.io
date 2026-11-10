import { QuoteForm } from '@/components/QuoteForm';
import { PhoneLink, WhatsAppLink } from '@/components/Shell';
import { Phone, MessageCircle } from 'lucide-react';
import { getBusiness } from '@/lib/business-config';
import { meta } from '@/lib/seo';
export const metadata=meta('Solicita presupuesto para tu mudanza','Formulario rápido para solicitar presupuesto de mudanza. También puedes llamar o escribir por WhatsApp.','/ads/mudanzas');
export default async function Ads(){const business=await getBusiness();return <main><div className="container quote-layout"><div className="quote-intro"><span className="eyebrow">SOLICITA TU PRESUPUESTO</span><h1>Tu mudanza empieza con una solicitud clara.</h1><p>Indica la ruta, el inmueble y los servicios que necesitas. Revisaremos tus datos para preparar una propuesta.</p><PhoneLink className="btn btn-dark"><Phone size={17}/>{business.phone}</PhoneLink><div style={{height:10}}/><WhatsAppLink className="btn btn-plain"><MessageCircle size={17}/> WhatsApp</WhatsAppLink><p>Sin precio automático. La disponibilidad se confirma al responderte.</p></div><QuoteForm source="ads"/></div></main>}

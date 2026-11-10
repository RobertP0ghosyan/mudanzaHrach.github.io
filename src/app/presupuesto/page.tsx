import { QuoteForm } from '@/components/QuoteForm';
import { SectionCTA } from '@/components/SectionCTA';
import { meta } from '@/lib/seo';
export const metadata=meta('Solicitar presupuesto de mudanza','Cuéntanos los detalles de tu mudanza en cuatro pasos. Sin tarifas inventadas ni compromiso.','/presupuesto');
export default function QuotePage(){return <main><div className="container quote-layout"><div className="quote-intro"><span className="eyebrow">PRESUPUESTO A TU MEDIDA</span><h1>Cuéntanos tu mudanza.</h1><p>En unos minutos puedes compartir los datos esenciales. Revisaremos tu solicitud para preparar una propuesta ajustada al traslado.</p><div className="callout"><strong>Qué necesitarás</strong><p>Origen y destino, fecha aproximada, datos del inmueble y un contacto para responderte.</p></div><p>El formulario genera una solicitud, no un precio automático.</p></div><QuoteForm/></div><SectionCTA/></main>}

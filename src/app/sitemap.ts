import type { MetadataRoute } from 'next';
import { getBusiness } from '@/lib/business-config';
export const dynamic='force-static';
export default async function sitemap():Promise<MetadataRoute.Sitemap> {const base=process.env.SITE_URL||'http://localhost:3000';const activeServices=(await getBusiness()).services.filter(s=>s.active);const paths=['','/servicios','/zonas','/sobre-nosotros','/presupuesto','/contacto','/preguntas-frecuentes','/consejos','/privacidad','/cookies','/aviso-legal',...activeServices.map(s=>`/servicios/${s.slug}`)];return paths.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:'monthly',priority:path===''?1:.6}))}

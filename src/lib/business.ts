/** Sustituir aquí todos los datos provisionales antes de publicar. */
export const business = {
  name: 'Tu empresa de mudanzas',
  shortName: 'Tu Mudanza',
  tagline: 'Tu mudanza, bien organizada desde el primer paso.',
  phone: '+34 655 71 11 62',
  phoneHref: 'tel:+34655711162',
  whatsapp: 'https://wa.me/34655711162',
  email: '',
  logoUrl: '',
  city: '',
  address: '',
  serviceAreas: [] as string[],
  languages: ['es'],
  services: [
    { slug: 'mudanzas-particulares', title: 'Mudanzas particulares', icon: 'home', description: 'Organiza el traslado de tu vivienda con un presupuesto ajustado a lo que necesitas.', active: true },
    { slug: 'mudanzas-de-oficinas', title: 'Mudanzas de oficinas', icon: 'briefcase', description: 'Planifica el traslado de tu espacio de trabajo con los detalles de acceso y mobiliario.', active: true },
    { slug: 'mudanzas-locales', title: 'Mudanzas locales', icon: 'map', description: 'Solicita una propuesta para traslados dentro de tu ciudad o alrededores.', active: true },
    { slug: 'mudanzas-nacionales', title: 'Mudanzas nacionales', icon: 'truck', description: 'Cuéntanos origen y destino para preparar un traslado entre ciudades.', active: true },
    { slug: 'embalaje-y-proteccion', title: 'Embalaje y protección', icon: 'box', description: 'Indica qué objetos necesitan embalaje o protección especial.', active: true },
    { slug: 'montaje-y-desmontaje', title: 'Montaje y desmontaje', icon: 'tool', description: 'Añade el desmontaje o montaje de muebles a tu solicitud.', active: true },
    { slug: 'mudanzas-internacionales', title: 'Mudanzas internacionales', icon: 'globe', description: 'Servicio pendiente de confirmar por la empresa.', active: false },
    { slug: 'guardamuebles', title: 'Guardamuebles', icon: 'archive', description: 'Servicio pendiente de confirmar por la empresa.', active: false },
  ],
};
export const activeServices = business.services.filter(s => s.active);
export type Business = typeof business;

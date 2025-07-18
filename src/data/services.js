export const services = [
  {
    id: 1,
    icon: '🛍️',
    title: 'Velas Personalizadas',
    description: 'Creamos velas únicas según tus especificaciones, desde la fragancia hasta el diseño.',
    features: [
      'Diseño personalizado',
      'Fragancias a medida',
      'Colores específicos',
      'Formas especiales',
      'Empaque personalizado'
    ],
    basePrice: 45.00,
    priceRange: 'Desde $45',
    duration: '5-7 días hábiles',
    popular: true,
    category: 'custom',
    process: [
      'Consulta inicial para definir requerimientos',
      'Selección de fragancias y colores',
      'Diseño y prototipo de la vela',
      'Producción artesanal',
      'Control de calidad y empaque'
    ],
    minOrder: 1,
    maxOrder: 50,
    tags: ['personalizado', 'único', 'artesanal']
  },
  {
    id: 2,
    icon: '🎁',
    title: 'Eventos Especiales',
    description: 'Velas temáticas para bodas, cumpleaños, aniversarios y celebraciones especiales.',
    features: [
      'Temáticas personalizadas',
      'Packaging especial',
      'Entrega puntual',
      'Descuentos por volumen',
      'Coordinación con eventos'
    ],
    basePrice: 30.00,
    priceRange: 'Desde $30',
    duration: '7-10 días hábiles',
    popular: true,
    category: 'events',
    process: [
      'Planificación del evento y temática',
      'Diseño de velas acordes al evento',
      'Cronograma de producción',
      'Empaque temático especial',
      'Entrega coordinada con el evento'
    ],
    minOrder: 10,
    maxOrder: 200,
    tags: ['eventos', 'bodas', 'celebraciones']
  },
  {
    id: 3,
    icon: '🏢',
    title: 'Corporativo',
    description: 'Velas corporativas con el logo y colores de tu empresa para eventos y regalos.',
    features: [
      'Logo personalizado',
      'Branding completo',
      'Pedidos grandes',
      'Facturación empresarial',
      'Entrega a múltiples ubicaciones'
    ],
    basePrice: null,
    priceRange: 'Cotización personalizada',
    duration: '10-15 días hábiles',
    popular: false,
    category: 'corporate',
    process: [
      'Reunión comercial y análisis de necesidades',
      'Propuesta técnica y comercial',
      'Desarrollo de prototipos con branding',
      'Producción en serie',
      'Logística y entrega escalonada'
    ],
    minOrder: 50,
    maxOrder: 1000,
    tags: ['corporativo', 'empresarial', 'branding']
  },
  {
    id: 4,
    icon: '📚',
    title: 'Talleres',
    description: 'Aprende a hacer tus propias velas en nuestros talleres prácticos y divertidos.',
    features: [
      'Clases grupales e individuales',
      'Materiales incluidos',
      'Certificado de participación',
      'Te llevas tu vela',
      'Instructor experimentado'
    ],
    basePrice: 75.00,
    priceRange: '$75 por persona',
    duration: '3-4 horas',
    popular: true,
    category: 'education',
    process: [
      'Introducción a la fabricación de velas',
      'Selección de materiales y fragancias',
      'Proceso de creación paso a paso',
      'Decoración y personalización',
      'Tiempo de secado y empaque'
    ],
    minOrder: 1,
    maxOrder: 12,
    tags: ['taller', 'aprendizaje', 'experiencia']
  },
  {
    id: 5,
    icon: '🔧',
    title: 'Mantenimiento',
    description: 'Servicios de renovación y mantenimiento para tus velas favoritas.',
    features: [
      'Recarga de cera',
      'Cambio de mecha',
      'Limpieza profunda',
      'Garantía extendida',
      'Asesoría de cuidado'
    ],
    basePrice: 15.00,
    priceRange: 'Desde $15',
    duration: '1-2 días hábiles',
    popular: false,
    category: 'maintenance',
    process: [
      'Evaluación del estado de la vela',
      'Limpieza y preparación',
      'Recarga o reparación necesaria',
      'Control de calidad',
      'Entrega con recomendaciones de cuidado'
    ],
    minOrder: 1,
    maxOrder: 20,
    tags: ['mantenimiento', 'reparación', 'renovación']
  },
  {
    id: 6,
    icon: '📦',
    title: 'Suscripción',
    description: 'Recibe velas nuevas cada mes con nuestra suscripción mensual.',
    features: [
      'Velas exclusivas del mes',
      'Envío gratuito',
      'Fragancias estacionales',
      'Cancela cuando quieras',
      'Descuentos para suscriptores'
    ],
    basePrice: 39.99,
    priceRange: '$39.99/mes',
    duration: 'Mensual',
    popular: true,
    category: 'subscription',
    process: [
      'Selección de preferencias de fragancia',
      'Curación mensual de velas',
      'Empaque especial de suscriptor',
      'Envío automático cada mes',
      'Acceso a contenido exclusivo'
    ],
    minOrder: 1,
    maxOrder: 1,
    tags: ['suscripción', 'mensual', 'exclusivo']
  }
];

// Helper functions for services
export const getServiceById = (id) => {
  return services.find(service => service.id === parseInt(id));
};

export const getServicesByCategory = (category) => {
  return services.filter(service => service.category === category);
};

export const getPopularServices = () => {
  return services.filter(service => service.popular);
};

export const searchServices = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return services.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.description.toLowerCase().includes(lowercaseQuery) ||
    service.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getServiceCategories = () => {
  const categories = services.map(service => service.category);
  return [...new Set(categories)];
};

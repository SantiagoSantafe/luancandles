export const products = [
  {
    id: 1,
    name: 'Vela de Lavanda',
    category: 'aromatherapy',
    price: 25.99,
    originalPrice: 29.99,
    image: '/api/placeholder/300/300',
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    description: 'Vela relajante con aceite esencial de lavanda puro, perfecta para crear un ambiente de tranquilidad y paz.',
    longDescription: 'Nuestra vela de lavanda está cuidadosamente elaborada con cera de soja 100% natural y aceite esencial de lavanda de la más alta calidad. Con una duración de aproximadamente 45 horas, esta vela es perfecta para momentos de relajación, meditación o simplemente para crear un ambiente acogedor en tu hogar.',
    features: [
      'Cera de soja 100% natural',
      'Aceite esencial de lavanda puro',
      'Mecha de algodón sin plomo',
      'Duración: 45 horas aproximadamente',
      'Envase de cristal reutilizable'
    ],
    benefits: [
      'Propiedades relajantes',
      'Ayuda a reducir el estrés',
      'Favorece el sueño reparador',
      'Purifica el ambiente'
    ],
    inStock: true,
    stock: 25,
    weight: '200g',
    dimensions: '8cm x 10cm',
    burnTime: '45 horas',
    fragrance: 'Lavanda',
    tags: ['relajante', 'aromaterapia', 'lavanda', 'natural'],
    rating: 4.8,
    reviews: 42,
    featured: true,
    discount: 13
  },
  {
    id: 2,
    name: 'Vela Decorativa Rosa',
    category: 'decorative',
    price: 32.99,
    originalPrice: 35.99,
    image: '/api/placeholder/300/300',
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    description: 'Hermosa vela decorativa en forma de rosa, perfecta para ocasiones especiales y decoración romántica.',
    longDescription: 'Esta elegante vela con forma de rosa es una verdadera obra de arte. Cada pétalo está meticulosamente tallado a mano, creando una pieza única que no solo ilumina sino que también decora. Ideal para cenas románticas, bodas o como regalo especial.',
    features: [
      'Diseño artesanal único',
      'Forma de rosa detallada',
      'Cera de parafina premium',
      'Mecha central de algodón',
      'Acabado brillante'
    ],
    benefits: [
      'Elemento decorativo único',
      'Perfecto para ocasiones especiales',
      'Crea ambiente romántico',
      'Pieza de conversación'
    ],
    inStock: true,
    stock: 15,
    weight: '150g',
    dimensions: '12cm x 8cm',
    burnTime: '35 horas',
    fragrance: 'Rosa silvestre',
    tags: ['decorativa', 'rosa', 'romántica', 'artesanal'],
    rating: 4.9,
    reviews: 28,
    featured: true,
    discount: 8
  },
  {
    id: 3,
    name: 'Vela Navideña',
    category: 'seasonal',
    price: 28.99,
    originalPrice: 31.99,
    image: '/api/placeholder/300/300',
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    description: 'Vela especial con aroma a canela y naranja, captura la esencia mágica de la Navidad.',
    longDescription: 'Sumérgete en el espíritu navideño con esta vela especialmente diseñada para las fiestas. La combinación de canela y naranja crea una atmósfera cálida y festiva que te transportará a los mejores momentos navideños.',
    features: [
      'Mezcla exclusiva de canela y naranja',
      'Cera de soja con decoración navideña',
      'Mecha de algodón trenzado',
      'Empaque temático navideño',
      'Edición limitada'
    ],
    benefits: [
      'Aroma festivo único',
      'Crea ambiente navideño',
      'Perfecto para reuniones familiares',
      'Regalo ideal para las fiestas'
    ],
    inStock: true,
    stock: 30,
    weight: '220g',
    dimensions: '9cm x 12cm',
    burnTime: '50 horas',
    fragrance: 'Canela y naranja',
    tags: ['navidad', 'canela', 'naranja', 'festiva'],
    rating: 4.7,
    reviews: 35,
    featured: false,
    discount: 9,
    seasonal: true
  },
  {
    id: 4,
    name: 'Vela Personalizada',
    category: 'custom',
    price: 45.99,
    originalPrice: 49.99,
    image: '/api/placeholder/300/300',
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    description: 'Vela hecha a medida con tu fragancia favorita y diseño personalizado único.',
    longDescription: 'Crea tu vela perfecta con nuestro servicio de personalización. Elige tu fragancia, color, forma y hasta puedes agregar un mensaje especial. Cada vela personalizada es única y refleja tu estilo personal.',
    features: [
      'Fragancia completamente personalizable',
      'Colores a elección',
      'Formas y tamaños variables',
      'Mensaje grabado opcional',
      'Empaque personalizado'
    ],
    benefits: [
      'Completamente único',
      'Refleja tu personalidad',
      'Regalo muy especial',
      'Atención personalizada'
    ],
    inStock: true,
    stock: 10,
    weight: 'Variable',
    dimensions: 'Personalizable',
    burnTime: '40-60 horas',
    fragrance: 'A elección',
    tags: ['personalizada', 'única', 'regalo', 'especial'],
    rating: 5.0,
    reviews: 18,
    featured: true,
    discount: 8,
    customizable: true
  },
  {
    id: 5,
    name: 'Vela de Eucalipto',
    category: 'aromatherapy',
    price: 29.99,
    originalPrice: 33.99,
    image: '/api/placeholder/300/300',
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    description: 'Vela energizante con aceite de eucalipto, ideal para purificar el ambiente y revitalizar los sentidos.',
    longDescription: 'El eucalipto es conocido por sus propiedades purificadoras y energizantes. Esta vela combina la frescura del eucalipto con la calidez de la llama, creando un ambiente limpio y revitalizante.',
    features: [
      'Aceite esencial de eucalipto',
      'Propiedades purificadoras',
      'Cera de soja ecológica',
      'Mecha de algodón natural',
      'Fragancia refrescante'
    ],
    benefits: [
      'Purifica el aire',
      'Efecto energizante',
      'Alivia la congestión',
      'Ambiente fresco y limpio'
    ],
    inStock: true,
    stock: 20,
    weight: '210g',
    dimensions: '8.5cm x 11cm',
    burnTime: '48 horas',
    fragrance: 'Eucalipto',
    tags: ['eucalipto', 'energizante', 'purificador', 'fresco'],
    rating: 4.6,
    reviews: 31,
    featured: false,
    discount: 12
  },
  {
    id: 6,
    name: 'Vela Minimalista',
    category: 'decorative',
    price: 35.99,
    originalPrice: 39.99,
    image: '/api/placeholder/300/300',
    images: [
      '/api/placeholder/300/300',
      '/api/placeholder/300/300',
      '/api/placeholder/300/300'
    ],
    description: 'Vela elegante de diseño minimalista, perfecta para espacios modernos y sofisticados.',
    longDescription: 'El diseño limpio y elegante de esta vela la convierte en el complemento perfecto para cualquier espacio moderno. Su forma geométrica simple y su color neutro se adaptan a cualquier decoración.',
    features: [
      'Diseño geométrico limpio',
      'Colores neutros',
      'Cera de alta calidad',
      'Mecha centrada perfectamente',
      'Acabado mate elegante'
    ],
    benefits: [
      'Se adapta a cualquier decoración',
      'Estilo moderno y elegante',
      'Perfecto para espacios minimalistas',
      'Pieza decorativa atemporal'
    ],
    inStock: true,
    stock: 18,
    weight: '180g',
    dimensions: '10cm x 8cm',
    burnTime: '42 horas',
    fragrance: 'Sutil vainilla',
    tags: ['minimalista', 'moderno', 'elegante', 'geométrico'],
    rating: 4.8,
    reviews: 24,
    featured: false,
    discount: 10
  }
];

// Helper functions for products
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductsOnSale = () => {
  return products.filter(product => product.discount > 0);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sortedProducts.sort((a, b) => b.id - a.id);
    default:
      return sortedProducts;
  }
};

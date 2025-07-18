export const PRODUCT_FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'recordatorios', label: 'Recordatorios' },
  { id: 'empresariales', label: 'Empresariales' },
  { id: 'premium', label: 'Premium' },
  { id: 'aromaticas', label: 'Aromáticas' },
];
export const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Vela Recordatorio Elegante',
    category: 'recordatorios',
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    image: 'https://picsum.photos/300/300?random=1',
    description: 'Vela perfecta para eventos especiales y celebraciones memorable.'
  },
  {
    id: 2,
    name: 'Souvenir Empresarial Premium',
    category: 'empresariales',
    price: 35000,
    originalPrice: 40000,
    discount: 12,
    image: 'https://picsum.photos/300/300?random=2',
    description: 'Diseño exclusivo para regalos corporativos únicos.'
  },
  {
    id: 3,
    name: 'Vela Aromática Lavanda',
    category: 'aromaticas',
    price: 28000,
    originalPrice: null,
    discount: null,
    image: 'https://picsum.photos/300/300?random=3',
    description: 'Aroma relajante de lavanda natural para tu hogar.'
  },
  {
    id: 4,
    name: 'Colección Premium Gold',
    category: 'premium',
    price: 45000,
    originalPrice: 55000,
    discount: 18,
    image: 'https://picsum.photos/300/300?random=4',
    description: 'La máxima expresión de elegancia en velas artesanales.'
  }
];
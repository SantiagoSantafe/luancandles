export const APP_CONFIG = {
  name: 'Luan Candles',
  description: 'Velas artesanales premium elaboradas con amor en Colombia',
  version: '1.0.0',
  author: 'Luan Candles Team',
  contact: {
    email: 'info@luancandles.com',
    phone: '+57 300 123 4567',
    address: 'Cra 10 #12-34, Zipaquirá, Colombia'
  },
  social: {
    instagram: 'https://instagram.com/luan_candles',
    facebook: '#',
    whatsapp: '#',
    tiktok: '#'
  }
};

export const FORM_VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[+]?[\d\s-()]+$/,
  required: (value) => value && value.trim().length > 0,
  minLength: (value, min) => value && value.length >= min,
  maxLength: (value, max) => value && value.length <= max
};

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  verySlow: 1000
};
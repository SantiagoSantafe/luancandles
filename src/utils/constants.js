// API endpoints
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  ORDERS: '/orders',
  CONTACT: '/contact',
  NEWSLETTER: '/newsletter',
  USERS: '/users'
};

// App configuration
export const APP_CONFIG = {
  APP_NAME: 'Luan Candles',
  VERSION: '1.0.0',
  COMPANY_NAME: 'Luan Candles',
  COMPANY_EMAIL: 'info@luancandles.com',
  COMPANY_PHONE: '+1 (555) 123-4567',
  COMPANY_ADDRESS: '123 Calle Principal, Ciudad, País'
};

// Product categories
export const PRODUCT_CATEGORIES = {
  ALL: 'all',
  AROMATHERAPY: 'aromatherapy',
  DECORATIVE: 'decorative',
  SEASONAL: 'seasonal',
  CUSTOM: 'custom'
};

export const CATEGORY_LABELS = {
  [PRODUCT_CATEGORIES.ALL]: 'Todas',
  [PRODUCT_CATEGORIES.AROMATHERAPY]: 'Aromaterapia',
  [PRODUCT_CATEGORIES.DECORATIVE]: 'Decorativas',
  [PRODUCT_CATEGORIES.SEASONAL]: 'Temporada',
  [PRODUCT_CATEGORIES.CUSTOM]: 'Personalizadas'
};

// Contact form subjects
export const CONTACT_SUBJECTS = {
  GENERAL: 'consulta-general',
  CUSTOM_ORDER: 'pedido-personalizado',
  QUOTE: 'cotizacion',
  WORKSHOP: 'taller',
  CORPORATE: 'corporativo',
  SUPPORT: 'soporte'
};

export const SUBJECT_LABELS = {
  [CONTACT_SUBJECTS.GENERAL]: 'Consulta General',
  [CONTACT_SUBJECTS.CUSTOM_ORDER]: 'Pedido Personalizado',
  [CONTACT_SUBJECTS.QUOTE]: 'Solicitar Cotización',
  [CONTACT_SUBJECTS.WORKSHOP]: 'Información sobre Talleres',
  [CONTACT_SUBJECTS.CORPORATE]: 'Servicios Corporativos',
  [CONTACT_SUBJECTS.SUPPORT]: 'Soporte Técnico'
};

// Toast types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
};

// Button variants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline'
};

// Button sizes
export const BUTTON_SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg'
};

// Modal sizes
export const MODAL_SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  EXTRA_LARGE: 'xl'
};

// Theme options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Currency options
export const CURRENCIES = {
  USD: 'USD',
  EUR: 'EUR',
  MXN: 'MXN'
};

// Order status
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
};

// Inquiry status
export const INQUIRY_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed'
};

// Priority levels
export const PRIORITY_LEVELS = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent'
};

// Social media links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/luancandles',
  INSTAGRAM: 'https://instagram.com/luancandles',
  WHATSAPP: 'https://wa.me/15551234567',
  TWITTER: 'https://twitter.com/luancandles'
};

// Navigation menu items
export const NAV_ITEMS = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Productos', href: '#products' },
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' }
];

// Default values
export const DEFAULTS = {
  PAGINATION_LIMIT: 12,
  TOAST_DURATION: 5000,
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 300,
  FREE_SHIPPING_THRESHOLD: 50
};

// Validation rules
export const VALIDATION_RULES = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[+]?[1-9][\d]{0,15}$/,
  PASSWORD_MIN_LENGTH: 8,
  MESSAGE_MIN_LENGTH: 10,
  NAME_MIN_LENGTH: 2
};

// Error messages
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: 'Este campo es requerido',
  INVALID_EMAIL: 'El email no es válido',
  INVALID_PHONE: 'El número de teléfono no es válido',
  PASSWORD_TOO_SHORT: 'La contraseña debe tener al menos 8 caracteres',
  MESSAGE_TOO_SHORT: 'El mensaje debe tener al menos 10 caracteres',
  NAME_TOO_SHORT: 'El nombre debe tener al menos 2 caracteres',
  TERMS_REQUIRED: 'Debes aceptar los términos y condiciones',
  NETWORK_ERROR: 'Error de conexión. Por favor intenta nuevamente.',
  GENERIC_ERROR: 'Ocurrió un error inesperado. Por favor intenta nuevamente.'
};

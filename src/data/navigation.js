export const navigation = {
  // Main navigation items
  main: [
    {
      id: 1,
      label: 'Inicio',
      href: '#hero',
      icon: '🏠',
      order: 1,
      active: true
    },
    {
      id: 2,
      label: 'Productos',
      href: '#products',
      icon: '🕯️',
      order: 2,
      active: true,
      submenu: [
        {
          id: 21,
          label: 'Todas las Velas',
          href: '#products',
          category: 'all'
        },
        {
          id: 22,
          label: 'Aromaterapia',
          href: '#products?category=aromatherapy',
          category: 'aromatherapy'
        },
        {
          id: 23,
          label: 'Decorativas',
          href: '#products?category=decorative',
          category: 'decorative'
        },
        {
          id: 24,
          label: 'Temporada',
          href: '#products?category=seasonal',
          category: 'seasonal'
        },
        {
          id: 25,
          label: 'Personalizadas',
          href: '#products?category=custom',
          category: 'custom'
        }
      ]
    },
    {
      id: 3,
      label: 'Servicios',
      href: '#services',
      icon: '⚙️',
      order: 3,
      active: true,
      submenu: [
        {
          id: 31,
          label: 'Velas Personalizadas',
          href: '#services?service=custom'
        },
        {
          id: 32,
          label: 'Eventos Especiales',
          href: '#services?service=events'
        },
        {
          id: 33,
          label: 'Servicios Corporativos',
          href: '#services?service=corporate'
        },
        {
          id: 34,
          label: 'Talleres',
          href: '#services?service=workshops'
        }
      ]
    },
    {
      id: 4,
      label: 'Nosotros',
      href: '#about',
      icon: '👥',
      order: 4,
      active: true
    },
    {
      id: 5,
      label: 'Contacto',
      href: '#contact',
      icon: '📞',
      order: 5,
      active: true
    }
  ],

  // Footer navigation
  footer: {
    company: [
      {
        id: 101,
        label: 'Sobre Nosotros',
        href: '#about'
      },
      {
        id: 102,
        label: 'Nuestra Historia',
        href: '#about'
      },
      {
        id: 103,
        label: 'Misión y Visión',
        href: '#about'
      },
      {
        id: 104,
        label: 'Equipo',
        href: '#about'
      }
    ],
    products: [
      {
        id: 201,
        label: 'Catálogo',
        href: '#products'
      },
      {
        id: 202,
        label: 'Nuevos Productos',
        href: '#products?filter=new'
      },
      {
        id: 203,
        label: 'Ofertas',
        href: '#products?filter=sale'
      },
      {
        id: 204,
        label: 'Más Vendidos',
        href: '#products?filter=bestsellers'
      }
    ],
    services: [
      {
        id: 301,
        label: 'Velas Personalizadas',
        href: '#services'
      },
      {
        id: 302,
        label: 'Talleres',
        href: '#services'
      },
      {
        id: 303,
        label: 'Eventos',
        href: '#services'
      },
      {
        id: 304,
        label: 'Corporativo',
        href: '#services'
      }
    ],
    support: [
      {
        id: 401,
        label: 'Contacto',
        href: '#contact'
      },
      {
        id: 402,
        label: 'FAQ',
        href: '#faq'
      },
      {
        id: 403,
        label: 'Envíos',
        href: '#shipping'
      },
      {
        id: 404,
        label: 'Devoluciones',
        href: '#returns'
      }
    ],
    legal: [
      {
        id: 501,
        label: 'Términos y Condiciones',
        href: '/terms'
      },
      {
        id: 502,
        label: 'Política de Privacidad',
        href: '/privacy'
      },
      {
        id: 503,
        label: 'Cookies',
        href: '/cookies'
      },
      {
        id: 504,
        label: 'Aviso Legal',
        href: '/legal'
      }
    ]
  },

  // Social media links
  social: [
    {
      id: 601,
      name: 'Facebook',
      icon: 'facebook',
      url: 'https://facebook.com/luancandles',
      color: '#1877F2',
      active: true
    },
    {
      id: 602,
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/luancandles',
      color: '#E4405F',
      active: true
    },
    {
      id: 603,
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: 'https://wa.me/15551234567',
      color: '#25D366',
      active: true
    },
    {
      id: 604,
      name: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/luancandles',
      color: '#1DA1F2',
      active: false
    },
    {
      id: 605,
      name: 'Pinterest',
      icon: 'pinterest',
      url: 'https://pinterest.com/luancandles',
      color: '#BD081C',
      active: false
    },
    {
      id: 606,
      name: 'YouTube',
      icon: 'youtube',
      url: 'https://youtube.com/luancandles',
      color: '#FF0000',
      active: false
    }
  ],

  // Breadcrumb configuration
  breadcrumbs: {
    separator: '>',
    showHome: true,
    homeLabel: 'Inicio',
    maxItems: 4
  },

  // Mobile menu configuration
  mobile: {
    breakpoint: 768,
    showIcons: true,
    collapsible: true,
    animationDuration: 300
  }
};

// Helper functions for navigation
export const getMainNavigation = () => {
  return navigation.main.filter(item => item.active).sort((a, b) => a.order - b.order);
};

export const getNavigationItem = (id) => {
  return navigation.main.find(item => item.id === parseInt(id));
};

export const getFooterNavigation = (section) => {
  return navigation.footer[section] || [];
};

export const getSocialLinks = (activeOnly = true) => {
  return activeOnly 
    ? navigation.social.filter(link => link.active)
    : navigation.social;
};

export const getSubmenu = (parentId) => {
  const parent = getNavigationItem(parentId);
  return parent ? parent.submenu || [] : [];
};

export const generateBreadcrumbs = (currentPath) => {
  const breadcrumbs = [];
  
  if (navigation.breadcrumbs.showHome) {
    breadcrumbs.push({
      label: navigation.breadcrumbs.homeLabel,
      href: '#hero',
      current: false
    });
  }

  // This would be expanded based on current route
  // For now, just return home breadcrumb
  return breadcrumbs;
};

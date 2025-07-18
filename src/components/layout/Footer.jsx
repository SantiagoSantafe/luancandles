import React from 'react';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import { SOCIAL_LINKS } from '../../data/contact';

const Footer = () => {
  const productCategories = [
    'Recordatorios',
    'Souvenirs Empresariales', 
    'Velas Premium',
    'Velas Aromáticas'
  ];

  return (
    <footer className="bg-luan-black-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal del footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Información de la marca */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luan-gold-400 to-luan-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-heading text-2xl font-bold">L</span>
                </div>
                <span className="font-heading text-2xl font-semibold">Luan Candles</span>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Velas artesanales premium elaboradas con amor en Colombia. Iluminamos momentos especiales 
                creando atmósferas únicas para cada ocasión.
              </p>
              
              {/* Información de contacto */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-luan-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">Zipaquirá, Colombia</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-luan-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">info@luancandles.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-luan-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+57 300 123 4567</span>
                </div>
              </div>
              
              {/* Redes sociales */}
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-luan-black-800 hover:bg-luan-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Enlaces rápidos */}
            <div>
              <h4 className="font-secondary text-lg font-semibold mb-6 text-luan-gold-400">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-luan-gold-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-luan-gold-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Categorías */}
            <div>
              <h4 className="font-secondary text-lg font-semibold mb-6 text-luan-gold-400">
                Nuestros Productos
              </h4>
              <ul className="space-y-3">
                {productCategories.map((category) => (
                  <li key={category}>
                    <a
                      href="#productos"
                      className="text-gray-300 hover:text-luan-gold-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-luan-gold-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sección de certificaciones y sellos */}
        <div className="py-8 border-t border-luan-black-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-300">100% Artesanal</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🌿</span>
                </div>
                <span className="text-sm text-gray-300">Eco-Friendly</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🏆</span>
                </div>
                <span className="text-sm text-gray-300">Calidad Premium</span>
              </div>
            </div>
            
            <div className="text-sm text-gray-400">
              Envíos a toda Colombia
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-luan-black-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Luan Candles. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button 
                type="button"
                className="hover:text-luan-gold-400 transition-colors cursor-pointer"
                onClick={() => console.log('Política de Privacidad')}
              >
                Política de Privacidad
              </button>
              <button 
                type="button"
                className="hover:text-luan-gold-400 transition-colors cursor-pointer"
                onClick={() => console.log('Términos y Condiciones')}
              >
                Términos y Condiciones
              </button>
              <button 
                type="button"
                className="hover:text-luan-gold-400 transition-colors cursor-pointer"
                onClick={() => console.log('Política de Devoluciones')}
              >
                Política de Devoluciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
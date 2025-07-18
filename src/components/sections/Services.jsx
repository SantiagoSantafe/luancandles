import React from 'react';
import { SERVICES_DATA } from '../../data/services';
import Button from '../ui/Button';

const Services = () => {
  return (
    <section id="servicios" className="py-16 lg:py-24 bg-gradient-to-br from-luan-cream-50 to-luan-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-luan-gold-100 text-luan-gold-700 rounded-full text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-medium text-luan-black-950 mb-4">
            Soluciones <span className="bg-gradient-to-r from-luan-gold-500 to-luan-gold-700 bg-clip-text text-transparent">
              Personalizadas
            </span>
          </h2>
          <p className="text-lg text-luan-black-700 max-w-3xl mx-auto">
            Ofrecemos servicios especializados para eventos y necesidades específicas
          </p>
        </div>
        
        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-3xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 border border-luan-cream-200"
            >
              <div className="text-4xl mb-6 text-luan-gold-500">{service.icon}</div>
              <h3 className="font-secondary text-xl font-semibold text-luan-black-900 mb-4">{service.title}</h3>
              <p className="text-sm text-luan-black-600 mb-6">{service.description}</p>
              <button className="text-luan-gold-600 font-secondary font-medium flex items-center gap-2 hover:underline">
                Ver más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="large">
            Solicita tu Cotización Personalizada
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
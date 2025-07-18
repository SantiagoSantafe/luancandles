import React from 'react';
import { Button } from '../ui';

const Services = () => {
  const services = [
    {
      icon: '🛍️',
      title: 'Velas Personalizadas',
      description: 'Creamos velas únicas según tus especificaciones, desde la fragancia hasta el diseño.',
      features: ['Diseño personalizado', 'Fragancias a medida', 'Colores específicos', 'Formas especiales'],
      price: 'Desde $45'
    },
    {
      icon: '🎁',
      title: 'Eventos Especiales',
      description: 'Velas temáticas para bodas, cumpleaños, aniversarios y celebraciones especiales.',
      features: ['Temáticas personalizadas', 'Packaging especial', 'Entrega puntual', 'Descuentos por volumen'],
      price: 'Desde $30'
    },
    {
      icon: '🏢',
      title: 'Corporativo',
      description: 'Velas corporativas con el logo y colores de tu empresa para eventos y regalos.',
      features: ['Logo personalizado', 'Branding completo', 'Pedidos grandes', 'Facturación empresarial'],
      price: 'Cotización'
    },
    {
      icon: '📚',
      title: 'Talleres',
      description: 'Aprende a hacer tus propias velas en nuestros talleres prácticos y divertidos.',
      features: ['Clases grupales', 'Materiales incluidos', 'Certificado', 'Te llevas tu vela'],
      price: '$75 por persona'
    },
    {
      icon: '🔧',
      title: 'Mantenimiento',
      description: 'Servicios de renovación y mantenimiento para tus velas favoritas.',
      features: ['Recarga de cera', 'Cambio de mecha', 'Limpieza profunda', 'Garantía extendida'],
      price: 'Desde $15'
    },
    {
      icon: '📦',
      title: 'Suscripción',
      description: 'Recibe velas nuevas cada mes con nuestra suscripción mensual.',
      features: ['Velas exclusivas', 'Envío gratuito', 'Fragancias estacionales', 'Cancela cuando quieras'],
      price: '$39.99/mes'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios para satisfacer todas tus 
            necesidades relacionadas con velas artesanales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-600">
                  {service.price}
                </span>
                <Button size="sm">
                  Solicitar
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestro Proceso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Consulta</h4>
              <p className="text-gray-600">Conversamos sobre tus necesidades y preferencias.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Diseño</h4>
              <p className="text-gray-600">Creamos un diseño personalizado para tu proyecto.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Producción</h4>
              <p className="text-gray-600">Elaboramos cuidadosamente tu vela artesanal.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Entrega</h4>
              <p className="text-gray-600">Te entregamos tu vela lista para disfrutar.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para comenzar tu proyecto?
          </h3>
          <p className="text-gray-600 mb-8">
            Contáctanos para una consulta gratuita y descubre cómo podemos ayudarte.
          </p>
          <Button size="lg">
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { ABOUT_STATS } from '../../data/stats';
import Button from '../ui/Button';

const About = () => {
  const features = [
    {
      icon: '🕯️',
      title: 'Artesanía Premium',
      description: 'Cada vela es elaborada a mano con técnicas tradicionales y materiales de primera calidad.'
    },
    {
      icon: '🌿',
      title: 'Ingredientes Naturales',
      description: 'Utilizamos cera de soja natural y esencias premium para una experiencia única.'
    },
    {
      icon: '🎨',
      title: 'Diseños Únicos',
      description: 'Creamos diseños exclusivos que reflejan elegancia y sofisticación.'
    },
    {
      icon: '🏆',
      title: 'Calidad Garantizada',
      description: 'Respaldamos cada producto con nuestra garantía de calidad y satisfacción.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-luan-gold-100 text-luan-gold-700 rounded-full text-sm font-medium mb-4">
                Nuestra Historia
              </span>
              <h2 className="text-4xl lg:text-5xl font-heading font-medium text-luan-black-950 mb-6">
                Artesanía que 
                <span className="block bg-gradient-to-r from-luan-gold-500 to-luan-gold-700 bg-clip-text text-transparent">
                  Ilumina Corazones
                </span>
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <p className="text-base text-luan-black-700">
                En Luan Candles, creemos que cada momento especial merece ser iluminado de manera única. 
                Desde nuestros inicios en Zipaquirá, Colombia, hemos dedicado nuestro corazón a crear 
                velas artesanales que no solo iluminan espacios, sino que crean atmósferas mágicas.
              </p>
              
              <p className="text-base text-luan-black-700">
                Nuestro compromiso con la excelencia se refleja en cada detalle: desde la selección 
                cuidadosa de materiales hasta el acabado final de cada vela. Trabajamos con pasión 
                para ofrecer productos que superen las expectativas de nuestros clientes.
              </p>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {ABOUT_STATS.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-luan-cream-100 rounded-2xl">
                  <div className="text-3xl font-heading font-bold text-luan-gold-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-luan-black-600">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button size="large">
              Conoce Nuestra Historia
            </Button>
          </div>
          
          {/* Imagen y características */}
          <div>
            {/* Imagen principal */}
            <div className="relative mb-8">
              <img 
                src="https://picsum.photos/500/600" 
                alt="Proceso artesanal"
                className="w-full h-auto rounded-3xl shadow-elegant"
              />
              
              {/* Badge flotante */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-elegant border border-luan-cream-200">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-luan-gold-400 to-luan-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-secondary font-semibold text-luan-black-900">5 Años</div>
                    <div className="text-sm text-luan-black-600">de Experiencia</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Características */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-2xl shadow-md border border-luan-cream-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h4 className="font-secondary font-semibold text-luan-black-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-luan-black-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
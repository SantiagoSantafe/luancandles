import React from 'react';

const About = () => {
  const values = [
    {
      icon: '🕯️',
      title: 'Artesanía',
      description: 'Cada vela es cuidadosamente elaborada a mano con técnicas tradicionales.'
    },
    {
      icon: '🌿',
      title: 'Natural',
      description: 'Utilizamos solo ingredientes naturales y ceras de la más alta calidad.'
    },
    {
      icon: '💚',
      title: 'Sostenible',
      description: 'Comprometidos con prácticas eco-amigables y packaging reciclable.'
    },
    {
      icon: '✨',
      title: 'Único',
      description: 'Cada vela tiene su propia personalidad y fragancia distintiva.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre Luan Candles
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nacimos de la pasión por crear ambientes únicos y especiales. 
              En Luan Candles, creemos que cada momento merece ser iluminado 
              de manera especial.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Desde nuestro taller artesanal, creamos velas que no solo iluminan 
              espacios, sino que también despiertan emociones y crean recuerdos 
              inolvidables. Cada vela es una pequeña obra de arte hecha con amor.
            </p>

            {/* Story Timeline */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">El Comienzo</h4>
                  <p className="text-gray-600">Todo comenzó como un hobby en mi cocina.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Crecimiento</h4>
                  <p className="text-gray-600">La demanda creció y establecimos nuestro taller.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hoy</h4>
                  <p className="text-gray-600">Continuamos innovando y creando velas únicas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/api/placeholder/500/600"
              alt="Artesana creando velas"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-amber-600">2+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-amber-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Nuestra Misión</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "Crear velas artesanales que transformen espacios ordinarios en 
            experiencias extraordinarias, iluminando momentos especiales y 
            despertando emociones a través de fragancias cuidadosamente seleccionadas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

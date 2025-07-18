import React from 'react';
import { Button } from '../ui';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ilumina tu hogar con
              <span className="text-amber-600 block">Velas Artesanales</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre nuestra colección única de velas hechas a mano con ingredientes 
              naturales. Cada vela cuenta una historia y crea el ambiente perfecto para 
              tus momentos especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg">
                Ver Productos
              </Button>
              <Button variant="outline" size="lg">
                Contactar Ahora
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/api/placeholder/600/400"
                alt="Velas artesanales Luan Candles"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <div className="text-gray-600">Velas Vendidas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
            <div className="text-gray-600">Clientes Felices</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Fragancias</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">2+</div>
            <div className="text-gray-600">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

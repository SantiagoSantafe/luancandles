import React from 'react';
import { HERO_STATS } from '../../data/stats';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luan-cream-100 via-luan-cream-50 to-white">
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-luan-gold-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-luan-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-luan-sage-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-luan-black-950 mb-6">
              Ilumina Momentos
              <span className="block bg-gradient-to-r from-luan-gold-500 to-luan-gold-700 bg-clip-text text-transparent">
                Especiales
              </span>
            </h1>
            
            <p className="text-lg text-luan-black-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Velas artesanales premium elaboradas con amor en Colombia. Perfectas para recordatorios, eventos especiales y souvenirs empresariales únicos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="large">
                Descubrir Colección
              </Button>
              
              <Button variant="secondary" size="large">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z"/>
                  </svg>
                  Ver Video
                </span>
              </Button>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-luan-cream-300">
              {HERO_STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-heading font-bold text-luan-gold-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-luan-black-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Imagen principal */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://picsum.photos/600/700" 
                alt="Velas Luan Candles"
                className="w-full h-auto rounded-3xl shadow-elegant hover:shadow-elegant-hover transition-shadow duration-500"
              />
              
              {/* Decoraciones flotantes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-luan-gold-400 to-luan-gold-600 rounded-full flex items-center justify-center shadow-gold">
                <span className="text-white font-heading text-sm font-bold">100%</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-luan-rose-300 to-luan-rose-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-luan-gold-100 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
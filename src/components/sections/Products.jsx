import React, { useState } from 'react';
import { ProductCard } from '../common';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'aromatherapy', name: 'Aromaterapia' },
    { id: 'decorative', name: 'Decorativas' },
    { id: 'seasonal', name: 'Temporada' },
    { id: 'custom', name: 'Personalizadas' },
  ];

  const products = [
    {
      id: 1,
      name: 'Vela de Lavanda',
      category: 'aromatherapy',
      price: 25.99,
      image: '/api/placeholder/300/300',
      description: 'Vela relajante con aceite esencial de lavanda'
    },
    {
      id: 2,
      name: 'Vela Decorativa Rosa',
      category: 'decorative',
      price: 32.99,
      image: '/api/placeholder/300/300',
      description: 'Hermosa vela decorativa en forma de rosa'
    },
    {
      id: 3,
      name: 'Vela Navideña',
      category: 'seasonal',
      price: 28.99,
      image: '/api/placeholder/300/300',
      description: 'Vela especial con aroma a canela y naranja'
    },
    {
      id: 4,
      name: 'Vela Personalizada',
      category: 'custom',
      price: 45.99,
      image: '/api/placeholder/300/300',
      description: 'Vela hecha a medida con tu fragancia favorita'
    },
    {
      id: 5,
      name: 'Vela de Eucalipto',
      category: 'aromatherapy',
      price: 29.99,
      image: '/api/placeholder/300/300',
      description: 'Vela energizante con aceite de eucalipto'
    },
    {
      id: 6,
      name: 'Vela Minimalista',
      category: 'decorative',
      price: 35.99,
      image: '/api/placeholder/300/300',
      description: 'Vela elegante de diseño minimalista'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra cuidadosa selección de velas artesanales, cada una 
            creada con amor y atención al detalle para brindarte la mejor experiencia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            ¿No encuentras lo que buscas? Podemos crear algo especial para ti.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Solicitar Vela Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;

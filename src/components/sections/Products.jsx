import React, { useState } from 'react';
import { PRODUCT_FILTERS, MOCK_PRODUCTS } from '../../data/products';
import ProductCard from '../common/ProductCard';
import Button from '../ui/Button';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const filteredProducts = activeFilter === 'todos' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(product => product.category === activeFilter);

  return (
    <section id="productos" className="py-16 lg:py-24 bg-gradient-to-b from-white to-luan-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-medium text-luan-black-950 mb-4">
            Nuestras <span className="bg-gradient-to-r from-luan-gold-500 to-luan-gold-700 bg-clip-text text-transparent">Creaciones</span>
          </h2>
          <p className="text-lg text-luan-black-700 max-w-3xl mx-auto">
            Cada vela es única, elaborada artesanalmente con los mejores materiales para crear momentos inolvidables
          </p>
        </div>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PRODUCT_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-secondary font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-luan-gold-400 text-white shadow-gold transform scale-105' 
                  : 'bg-white text-luan-black-700 border border-luan-cream-300 hover:border-luan-gold-300 hover:text-luan-gold-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* CTA para ver más */}
        <div className="text-center mt-16">
          <Button size="large">
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
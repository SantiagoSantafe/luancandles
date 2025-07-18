import React from 'react';
import Button from '../ui/Button';

const ProductCard = ({ product, className = '' }) => {
  return (
    <div className={`group relative bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-elegant-hover transition-all duration-500 border border-luan-cream-200 hover:border-luan-gold-200 hover:-translate-y-2 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-luan-gold-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Imagen del producto */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay con efecto shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
        
        {/* Badge de descuento */}
        {product.discount && (
          <div className="absolute top-4 left-4 bg-luan-rose-300 text-white px-3 py-1 rounded-full text-sm font-medium">
            -{product.discount}%
          </div>
        )}
        
        {/* Botón de favorito */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <svg className="w-5 h-5 text-luan-black-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      
      {/* Contenido */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-luan-gold-600 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-secondary text-xl font-semibold text-luan-black-900 mb-2 group-hover:text-luan-gold-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-luan-black-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {product.originalPrice && (
              <span className="text-sm text-luan-black-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-lg font-semibold text-luan-gold-600">
              ${product.price.toLocaleString()}
            </span>
          </div>
          
          <Button size="small" className="text-sm">
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
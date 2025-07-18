import React, { useState } from 'react';
import { Button, Modal } from '../ui';

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              Ver Detalles
            </button>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {product.category === 'aromatherapy' && 'Aromaterapia'}
              {product.category === 'decorative' && 'Decorativa'}
              {product.category === 'seasonal' && 'Temporada'}
              {product.category === 'custom' && 'Personalizada'}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-amber-600">
              ${product.price}
            </span>
            <Button size="sm">
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={product.name}
        size="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {product.category === 'aromatherapy' && 'Aromaterapia'}
                {product.category === 'decorative' && 'Decorativa'}
                {product.category === 'seasonal' && 'Temporada'}
                {product.category === 'custom' && 'Personalizada'}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cera de soja 100% natural
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Mecha de algodón sin plomo
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Duración aproximada: 40-50 horas
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Empaque eco-amigable
                </li>
              </ul>
            </div>

            {/* Price and Actions */}
            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-amber-600">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500">
                  Envío gratuito en pedidos +$50
                </span>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1">
                  Agregar al Carrito
                </Button>
                <Button variant="outline">
                  ❤️
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductCard;

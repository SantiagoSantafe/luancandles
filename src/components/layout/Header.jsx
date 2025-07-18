import React, { useState } from 'react';
import { NAVIGATION_ITEMS } from '../../data/navigation';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ContactForm from '../common/ContactForm';
import { useContactForm } from '../../hooks';
import { useModal } from '../../hooks';

const Header = ({ showToast }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen: isContactModalOpen, openModal: openContactModal, closeModal: closeContactModal } = useModal();
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit, resetForm } = useContactForm();

  const handleContactSubmit = (e) => {
    handleSubmit(e, () => {
      showToast('¡Mensaje enviado con éxito!', 'success');
      closeContactModal();
      resetForm();
    });
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleContactButtonClick = () => {
    openContactModal();
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-luan-cream-100/80 backdrop-blur-md border-b border-luan-cream-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-luan-gold-400 to-luan-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-heading text-xl font-bold">L</span>
                </div>
                <span className="font-heading text-xl lg:text-2xl font-semibold text-luan-black-900">
                  Luan Candles
                </span>
              </div>
            </div>
            
            {/* Navegación Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="font-secondary text-base font-medium text-luan-black-700 hover:text-luan-gold-600 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luan-gold-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            {/* Botones de acción */}
            <div className="flex items-center space-x-4">
              <Button 
                onClick={openContactModal}
                size="small"
                className="hidden sm:block"
              >
                Contáctanos
              </Button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-luan-black-600 hover:text-luan-gold-600 hover:bg-luan-cream-200 rounded-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-luan-cream-200">
            <nav className="px-4 py-4 space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block py-2 font-secondary text-base font-medium text-luan-black-700 hover:text-luan-gold-600 transition-colors duration-200"
                  onClick={handleMenuItemClick}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                onClick={handleContactButtonClick}
                size="small"
                className="w-full mt-2"
              >
                Contáctanos
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Modal de contacto */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal}
        title="Contáctanos"
      >
        <ContactForm
          formData={formData}
          errors={errors}
          isSubmitting={isSubmitting}
          onInputChange={handleInputChange}
          onSubmit={handleContactSubmit}
        />
      </Modal>
    </>
  );
};

export default Header;
import React from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const ContactForm = ({ formData, errors, isSubmitting, onInputChange, onSubmit, className = '' }) => {
  return (
    <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      <Input
        label="Nombre"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={onInputChange}
        error={errors.name}
        placeholder="Tu nombre"
        required
      />
      
      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        error={errors.email}
        placeholder="tu@email.com"
        required
      />
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-luan-black-700">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={onInputChange}
          required
          rows={5}
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
              : 'border-luan-cream-300 focus:border-luan-gold-400 focus:ring-luan-gold-200'
          } focus:outline-none focus:ring-4 bg-white text-luan-black-800 placeholder-luan-black-500`}
          placeholder="Cuéntanos cómo podemos ayudarte..."
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message}</p>
        )}
      </div>
      
      <Button
        type="submit"
        size="large"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </Button>
    </form>
  );
};

export default ContactForm;
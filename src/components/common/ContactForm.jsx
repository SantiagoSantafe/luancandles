import React from 'react';
import { useContactForm } from '../../hooks';
import { Input, Button } from '../ui';

const ContactForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Nombre"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
          required
          placeholder="Tu nombre"
        />
        <Input
          label="Apellido"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
          required
          placeholder="Tu apellido"
        />
      </div>

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="tu@email.com"
      />

      <Input
        label="Teléfono"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        placeholder="+1 (555) 123-4567"
      />

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Asunto <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
        >
          <option value="">Selecciona un asunto</option>
          <option value="consulta-general">Consulta General</option>
          <option value="pedido-personalizado">Pedido Personalizado</option>
          <option value="cotizacion">Solicitar Cotización</option>
          <option value="taller">Información sobre Talleres</option>
          <option value="corporativo">Servicios Corporativos</option>
          <option value="soporte">Soporte Técnico</option>
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Cuéntanos más sobre tu proyecto o consulta..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-vertical"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Additional Options */}
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            id="newsletter"
            name="newsletter"
            type="checkbox"
            checked={formData.newsletter}
            onChange={handleChange}
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
          />
          <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
            Quiero recibir noticias y ofertas especiales por email
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleChange}
            required
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            Acepto los <button type="button" className="text-amber-600 hover:text-amber-700 underline">términos y condiciones</button> y la <button type="button" className="text-amber-600 hover:text-amber-700 underline">política de privacidad</button> <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.terms && (
          <p className="text-sm text-red-600">{errors.terms}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={resetForm}
          disabled={isSubmitting}
        >
          Limpiar
        </Button>
      </div>

      {/* Success Message */}
      {formData.submitted && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-green-800">
                ¡Mensaje enviado exitosamente!
              </h3>
              <p className="text-sm text-green-700 mt-1">
                Hemos recibido tu mensaje y te responderemos dentro de las próximas 24 horas.
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;

import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../data/contact';
import ContactForm from '../common/ContactForm';
import { useContactForm } from '../../hooks';

const Contact = ({ showToast }) => {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit, resetForm } = useContactForm();

  const handleContactSubmit = (e) => {
    handleSubmit(e, () => {
      showToast('¡Mensaje enviado con éxito!', 'success');
      resetForm();
    });
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Información de contacto */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-medium text-luan-black-950 mb-6">
              <span className="bg-gradient-to-r from-luan-gold-500 to-luan-gold-700 bg-clip-text text-transparent">
                Contáctanos
              </span>
            </h2>
            <p className="text-lg text-luan-black-700 mb-8">
              ¿Tienes preguntas o necesitas una cotización personalizada? ¡Estamos aquí para ayudarte!
            </p>
            
            <div className="space-y-6">
              {CONTACT_INFO.map((contact) => (
                <div key={contact.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-luan-gold-100 rounded-full flex items-center justify-center">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-secondary font-semibold text-luan-black-900 mb-1">{contact.title}</h4>
                    <p className="text-sm text-luan-black-600">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Redes sociales */}
            <div className="mt-12">
              <h4 className="font-secondary font-semibold text-luan-black-900 mb-4">Síguenos en redes</h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-luan-black-800 hover:bg-luan-gold-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div>
            <div className="bg-luan-cream-50 rounded-3xl p-8 shadow-elegant">
              <h3 className="font-secondary text-2xl font-semibold text-luan-black-900 mb-6">Envíanos un mensaje</h3>
              <ContactForm
                formData={formData}
                errors={errors}
                isSubmitting={isSubmitting}
                onInputChange={handleInputChange}
                onSubmit={handleContactSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
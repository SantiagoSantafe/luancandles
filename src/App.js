import React from 'react';
import { Layout } from './components/layout';
import { Hero, Products, About, Services, Contact } from './components/sections';
import { AppProvider, ContactProvider } from './context';
import { useToast } from './hooks';
import { Toast } from './components/ui';

// Main App component with toast functionality
const AppContent = () => {
  const { toast, hideToast } = useToast();

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      
      {/* Products Section */}
      <Products />
      
      {/* About Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Global Toast Component */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
        position="top-right"
      />
    </Layout>
  );
};

// Main App component with providers
const App = () => {
  return (
    <AppProvider>
      <ContactProvider>
        <AppContent />
      </ContactProvider>
    </AppProvider>
  );
};

export default App;

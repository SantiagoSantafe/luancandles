import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, showToast }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header showToast={showToast} />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
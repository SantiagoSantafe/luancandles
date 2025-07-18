import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactState, setContactState] = useState({
    isModalOpen: false,
    submissions: [],
    loading: false,
  });

  const openContactModal = () => {
    setContactState(prev => ({ ...prev, isModalOpen: true }));
  };

  const closeContactModal = () => {
    setContactState(prev => ({ ...prev, isModalOpen: false }));
  };

  const addSubmission = (submission) => {
    setContactState(prev => ({
      ...prev,
      submissions: [...prev.submissions, { ...submission, id: Date.now(), timestamp: new Date() }]
    }));
  };

  const setLoading = (loading) => {
    setContactState(prev => ({ ...prev, loading }));
  };

  return (
    <ContactContext.Provider value={{
      contactState,
      openContactModal,
      closeContactModal,
      addSubmission,
      setLoading
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact debe ser usado dentro de ContactProvider');
  }
  return context;
};

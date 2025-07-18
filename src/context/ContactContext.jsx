import React, { createContext, useContext, useState } from 'react';

// Initial state
const initialState = {
  contacts: [],
  inquiries: [],
  isSubmitting: false,
  lastSubmission: null
};

// Create context
const ContactContext = createContext();

// Provider component
export const ContactProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  // Add a new contact inquiry
  const addInquiry = async (inquiryData) => {
    setState(prev => ({ ...prev, isSubmitting: true }));
    
    try {
      // Generate a unique ID for the inquiry
      const newInquiry = {
        id: Date.now().toString(),
        ...inquiryData,
        createdAt: new Date().toISOString(),
        status: 'pending',
        priority: getPriority(inquiryData.subject)
      };

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setState(prev => ({
        ...prev,
        inquiries: [newInquiry, ...prev.inquiries],
        lastSubmission: newInquiry,
        isSubmitting: false
      }));

      return { success: true, inquiry: newInquiry };
    } catch (error) {
      setState(prev => ({ ...prev, isSubmitting: false }));
      throw new Error('Failed to submit inquiry');
    }
  };

  // Update inquiry status
  const updateInquiryStatus = (inquiryId, status) => {
    setState(prev => ({
      ...prev,
      inquiries: prev.inquiries.map(inquiry =>
        inquiry.id === inquiryId
          ? { ...inquiry, status, updatedAt: new Date().toISOString() }
          : inquiry
      )
    }));
  };

  // Get inquiries by status
  const getInquiriesByStatus = (status) => {
    return state.inquiries.filter(inquiry => inquiry.status === status);
  };

  // Get priority based on subject
  const getPriority = (subject) => {
    const highPrioritySubjects = ['soporte', 'corporativo'];
    const mediumPrioritySubjects = ['pedido-personalizado', 'cotizacion'];
    
    if (highPrioritySubjects.includes(subject)) return 'high';
    if (mediumPrioritySubjects.includes(subject)) return 'medium';
    return 'low';
  };

  // Subscribe to newsletter
  const subscribeToNewsletter = async (email) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const existingContact = state.contacts.find(contact => contact.email === email);
      
      if (!existingContact) {
        const newContact = {
          id: Date.now().toString(),
          email,
          subscribedAt: new Date().toISOString(),
          isActive: true
        };

        setState(prev => ({
          ...prev,
          contacts: [...prev.contacts, newContact]
        }));
      }

      return { success: true };
    } catch (error) {
      throw new Error('Failed to subscribe to newsletter');
    }
  };

  // Unsubscribe from newsletter
  const unsubscribeFromNewsletter = async (email) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setState(prev => ({
        ...prev,
        contacts: prev.contacts.map(contact =>
          contact.email === email
            ? { ...contact, isActive: false, unsubscribedAt: new Date().toISOString() }
            : contact
        )
      }));

      return { success: true };
    } catch (error) {
      throw new Error('Failed to unsubscribe from newsletter');
    }
  };

  // Get statistics
  const getStats = () => {
    const totalInquiries = state.inquiries.length;
    const pendingInquiries = getInquiriesByStatus('pending').length;
    const resolvedInquiries = getInquiriesByStatus('resolved').length;
    const activeSubscribers = state.contacts.filter(contact => contact.isActive).length;

    return {
      totalInquiries,
      pendingInquiries,
      resolvedInquiries,
      activeSubscribers,
      responseRate: totalInquiries > 0 ? (resolvedInquiries / totalInquiries) * 100 : 0
    };
  };

  const value = {
    // State
    ...state,
    
    // Actions
    addInquiry,
    updateInquiryStatus,
    getInquiriesByStatus,
    subscribeToNewsletter,
    unsubscribeFromNewsletter,
    getStats
  };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to use the context
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

export default ContactContext;

import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-secondary font-medium rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-luan-gold-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-luan-gold-400 to-luan-gold-600 hover:from-luan-gold-500 hover:to-luan-gold-700 text-white shadow-gold hover:shadow-gold-hover hover:-translate-y-1 active:translate-y-0',
    secondary: 'bg-transparent border-2 border-luan-gold-400 text-luan-gold-600 hover:bg-luan-gold-400 hover:text-white hover:border-luan-gold-400 hover:-translate-y-1',
    ghost: 'bg-transparent border border-luan-cream-300 text-luan-black-700 hover:border-luan-gold-400 hover:text-luan-gold-600',
    outline: 'bg-white border-2 border-luan-black-200 text-luan-black-800 hover:border-luan-gold-400 hover:text-luan-gold-600 shadow-sm hover:shadow-md',
  };
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };
  
  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
import React from 'react';

const Input = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-luan-black-700">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl border ${
          error 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
            : 'border-luan-cream-300 focus:border-luan-gold-400 focus:ring-luan-gold-200'
        } focus:outline-none focus:ring-4 bg-white text-luan-black-800 placeholder-luan-black-500 ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
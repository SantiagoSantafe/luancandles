/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores Primarios Luan Candles
        'luan-gold': {
          50: '#fdf8f3',
          100: '#faf0e4',
          200: '#f4ddc4',
          300: '#ebc49f',
          400: '#d4a574', // Color principal
          500: '#c4956a',
          600: '#b8956a', // Intenso
          700: '#a0824f',
          800: '#826944',
          900: '#6b5638',
        },
        'luan-black': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2d2d2d', // Carbón
          950: '#1a1a1a', // Negro principal
        },
        'luan-cream': {
          50: '#fefdfb',
          100: '#f8f6f0', // Crema principal
          200: '#f2ede3',
          300: '#e8e2d5', // Beige cálido
          400: '#ddd4c3',
          500: '#cfc1a8',
          600: '#bfac8d',
          700: '#a08f73',
          800: '#84755f',
          900: '#6d614f',
        },
        // Colores de Acento
        'luan-rose': {
          50: '#fdf5f3',
          100: '#fbe8e2',
          200: '#f6d5cb',
          300: '#e8b4a0', // Rose gold principal
          400: '#dc9983',
          500: '#c97a5c',
          600: '#b46344',
          700: '#965138',
          800: '#7c4633',
          900: '#673d30',
        },
        'luan-sage': {
          50: '#f5f7f2',
          100: '#e8ece1',
          200: '#d2dbc4',
          300: '#9caf88', // Verde salvia principal
          400: '#8aa076',
          500: '#73885f',
          600: '#5c6d4a',
          700: '#49563c',
          800: '#3c4532',
          900: '#333a2b',
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'secondary': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(26, 26, 26, 0.08)',
        'elegant-hover': '0 12px 40px rgba(26, 26, 26, 0.15)',
        'gold': '0 4px 15px rgba(212, 165, 116, 0.3)',
        'gold-hover': '0 8px 25px rgba(212, 165, 116, 0.4)',
      },
    },
  },
  plugins: [],
}
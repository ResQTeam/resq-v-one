/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'resq-brand-main': '#CC5E28',
        'resq-brand-dark': '#b75424',
        'resq-brand-light': '#d76831',
        'resq-brand-subtle': '#F5F0F0',
        'resq-dark-400': '#0A0A0A',
        'resq-dark-300': '#221D1D',
        'resq-dark-200': '#332D2D',
        'resq-dark-100': '#555555',
        'resq-light-400': '#FFD782',
        'resq-light-300': '#EBE1E1',
        'resq-light-200': '#F5F0F0',
        'resq-light-100': '#FAFAFC',
        'resq-light-grey': '#DEDEDE',
        'resq-body-text-2': '#787878',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        volkhov: ['Volkhov', 'serif'],
      },
      fontSize: {
        h1: ['3.75rem', '5.625rem'],
        h2: ['3.5rem', '5.25rem'],
        h3: ['3.125rem', '1.78125rem'],
        h4: ['2.8125rem', '2.2rem'],
        h5: ['1.875rem', '1.65rem'],
        h6: ['1.25rem', '1.375rem'],
      },
      boxShadow: {
        medium: '1px 1px 20px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

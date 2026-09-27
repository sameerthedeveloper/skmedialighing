/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#10100f', paper: '#f5f3ee', signal: '#d7ff3f' },
      fontFamily: { sans: ['var(--font-manrope)', 'sans-serif'], display: ['var(--font-playfair)', 'serif'], mono: ['var(--font-mono)', 'monospace'] }
    }
  },
  plugins: []
};

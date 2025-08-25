/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
      backgroundImage: {
        'radial': 'radial-gradient(1200px 600px at 80% -10%, rgba(34,197,94,0.25), transparent), radial-gradient(800px 400px at 10% 10%, rgba(6,182,212,0.25), transparent)',
        'grid': 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '24px 24px' },
      dropShadow: { glow: '0 0 20px rgba(16,185,129,0.5)' }
    },
  },
  plugins: [],
}

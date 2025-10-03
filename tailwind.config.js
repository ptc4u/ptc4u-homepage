/**
 * Tailwind CSS configuration.
 *
 * This file defines the paths to all of the template files in the project
 * so Tailwind can purge unused styles in production. It also extends the
 * default theme with custom colors that match Pinnacle Thrive Coaching's brand.
 */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669', // Emerald green for growth and transformation
          dark: '#047857',
          light: '#10b981',
        },
        secondary: {
          DEFAULT: '#7c3aed', // Purple for wisdom and transformation
          dark: '#6d28d9',
          light: '#8b5cf6',
        },
        accent: {
          DEFAULT: '#f59e0b', // Gold accent for achievement and success
          dark: '#d97706',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'tan-pearl': ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

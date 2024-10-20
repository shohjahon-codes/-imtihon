/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Yellowtail', 'sans-serif'], // O'zingiz ulagan font
      serif: ['Roboto', 'serif'],     // Agar serif font ham ishlatmoqchi bo'lsangiz
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      gray: 'var(--color-gray)',
      light: 'var(--color-light)',
      offWhite: 'var(--color-off-white)',
      darkGray: 'var(--color-dark-gray)',
    },

    fontSize: {
      'h1': ['70px', { lineHeight: '83px', fontWeight: '800' }],
      'h2': ['50px', { lineHeight: '58px', fontWeight: '800' }],
      'h3': ['40px', { lineHeight: '46px', fontWeight: '800' }],
      'h4': ['35px', { lineHeight: '41px', fontWeight: '800' }],
      'h5': ['30px', { lineHeight: '35px', fontWeight: '800' }],
      'h6': ['25px', { lineHeight: '29px', fontWeight: '800' }],
      'p': ['18px', { lineHeight: '29px', fontWeight: '400' }],
    },

    container: {
      center: true,  // containerni markazda joylashtiradi
      padding: '2rem',  // container ichki masofasini belgilaydi
      screens: {
        sm: '100%',  // kichik ekranlar uchun 100%
        md: '768px', // o'rta ekranlar uchun 768px
        lg: '1024px', // katta ekranlar uchun 1024px
        xl: '1280px', // juda katta ekranlar uchun 1280px
      },
    }
    
    
  },
  plugins: [],
}

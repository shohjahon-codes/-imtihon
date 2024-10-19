/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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

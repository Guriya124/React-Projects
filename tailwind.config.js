/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4763b',
        secondary: '#c05661',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          "2xl": "6rem",
        },

      },

      backgroundImage: {
        hero: "url('../assets/pic1.jpg')",
        video: "url('../assets/video1.mp4')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2220px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },


    },

  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#F6AF03",
        secondary: "#011C2A",
        mainBg: "#FBFBFB",
        paragraph: "#C9C9C9",
        form: "#8D8D8D",
        subscribeButton: "#000E15",
        subscribeInput: "#02273A",
        footerSubscribe: "#011621",
        menuButton: "#1F1F1F",
      },
      fontFamily: {
        Inter: ['Inter'],
        Roboto: ['Roboto'],
        Poppins: ['Poppins'],
        Manrope: ['Manrope'],
      },
      gridTemplateColumns: {
        footer: '58% 32%'
      },
    },
    keyframes: {
      error: {
        from: {transform: 'translateY(-100%)'},
        to: {transform: 'translateY(0%)'},
      }
    },
    animation: {
      errorAnimate: 'error 1.5s ease '
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const noSpinButton = {
        ".no-spin-buttons": {
          "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
        },
      };
      addUtilities(noSpinButton, ["responsive"]);
    }
  ],
}


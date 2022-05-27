module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroImg: "url('/assets/hero_sec_img/bg.png')",
      },
      fontFamily: {
        hero: ["'Montserrat', sans-serif"],
        poppins: ["'Poppins', sans-serif"],
        volk: ["Volkhov", "serif"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
    },
  },

  plugins: [],
};

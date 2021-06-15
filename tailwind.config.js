module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Lato":["Lato", "san-serif"],
        "Nunito":["Nunito", "san-serif"],
        "RobotoMono":["Roboto Mono", "san-serif"],
        "NunitoSans":["Nunito Sans", "san-serif"],
        "openSans":["Open Sans", "san-serif"]
      },
      animation: {
        fadeIn: `fadeIn 2s`,
        fadeInSlow: `fadeIn 3s`,
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      zIndex: {
        positive: 9999,
        negative: -9999,
      },
      inset: {
        "1/2": "50%",
      },
      colors:{
        dracula:{
          backGround:"#282a36",
          currentLine:"#44475a",
          foreGround:"#f8f8f2",
          comment:"#6272a4",
          draculaPurple:"#bd93f9",
          draculaCyan:"#8be9fd",
          draculaYellow:"#f1fa8c"
        }
      },
    },
  },
  variants: {},
  plugins: [
    
  ],
};

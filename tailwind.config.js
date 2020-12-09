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
      fontFamily: {
        Nunito: [`Nunito`],
        openSans: [`Open+Sans`],
      },
      height: {
        l: `22rem`,
        xl: `28rem`,
        xxl: `43rem`,
        xxxl: `50rem`,
      },
      zIndex: {
        negative: -1,
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {},
  plugins: [],
};

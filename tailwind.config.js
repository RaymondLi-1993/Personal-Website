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

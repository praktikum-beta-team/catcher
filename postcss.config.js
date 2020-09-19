module.exports = {
  plugins: [
    [
      "postcss-mixins",
      {
        mixinsFiles: "./src/styles/abstracts/mixins.css",
      },
    ],
    ["postcss-simple-vars", { silent: true }],
    "postcss-nested",
    [
      "postcss-custom-properties",
      {
        importFrom: "./src/styles/themes/default.css",
      },
    ],
    "autoprefixer",
  ],
};

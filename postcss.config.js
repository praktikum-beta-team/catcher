const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    ["postcss-mixins", {
      mixinsFiles: "./src/styles/abstracts/mixins.css"
    }],
    ["postcss-simple-vars", {
      silent: true
    }],
    "postcss-nested",
    IS_PRODUCTION && ["postcss-custom-properties", {
      importFrom: "./src/styles/themes/default.css",
    }],
    IS_PRODUCTION && "autoprefixer",
    IS_PRODUCTION && ["cssnano", {
      preset: "default",
    }],
  ],
};
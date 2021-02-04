module.exports = ({ mode }) => {
  const IS_PRODUCTION = mode === "production";

  const mixinsFiles = "./src/styles/abstracts/mixins.css";
  const customPropertiesFile = "./src/styles/themes/default.css";

  return {
    plugins: [
      ["postcss-mixins", { mixinsFiles }],
      ["postcss-simple-vars", { silent: true }],
      "postcss-nested",
      IS_PRODUCTION && ["postcss-custom-properties", { importFrom: customPropertiesFile }],
      "postcss-preset-env",
      IS_PRODUCTION && "autoprefixer",
    ],
  };
};

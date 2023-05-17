const { override, addWebpackModuleRule } = require("customize-cra");
module.exports = override(
  addWebpackModuleRule({
    test: /\.(jpg|jpeg)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[name].[hash].[ext]",
        outputPath: "images/",
      },
    },
  })
);

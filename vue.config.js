const path = require("path");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Venturit-test/" : "/",

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/assets/styles/_variables.scss"),
      ],
    },
  },
};

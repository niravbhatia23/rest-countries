const path = require("path");

const config = {
  entry: path.join(__dirname, "src", "index.js"),
  mode: "development",
  output: {
    filename: "out.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
module.exports = config;

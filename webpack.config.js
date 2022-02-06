const path = require("path");
const { merge } = require("webpack-merge");

const base = {
  mode: "production",
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
};

const development = {
  mode: "development",
  devServer: {
    static: "./dist",
  },
};

module.exports = (env, argv) =>
  argv.mode === "development" ? merge(base, development) : base;

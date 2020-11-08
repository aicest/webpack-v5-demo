module.exports = {
  entry: "./src/empty.ts",
  module: {
    rules: [{ test: /\.ts/, loader: "ts-loader" }],
  },
};

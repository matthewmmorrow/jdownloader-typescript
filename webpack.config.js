const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: ['es5'],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'jdownloader.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFormat: "commonjs",
    library: {
      type: 'var',
      name: 'jdownloader'
    }
  },
};
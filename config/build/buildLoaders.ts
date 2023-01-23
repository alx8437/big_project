import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'

export function buildLoaders(): webpack.RuleSetRule[] {
  // Order loaders is important

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // It creates a CSS file per JS file which contains CSS
        MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
  }

  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
  };
  
  return [
    typescriptLoader,
    cssLoader,
  ]
}
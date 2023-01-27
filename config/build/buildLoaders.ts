import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack'
import { IBuildOptions } from './types/configTypes';

export function buildLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  // Order loaders is important

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // It creates a CSS file per JS file which contains CSS
        isDev ? 'style-loader': MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]'
            },
          }
        },
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
import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { IBuildOptions } from "./types/configTypes";

export function buildPlugins({paths} : IBuildOptions): webpack.WebpackPluginInstance[] {

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin()
  ]
}
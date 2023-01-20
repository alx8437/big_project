import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolvers";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildPaths } from "./config/build/types/config";

const paths: IBuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build')
}

const mode = 'development'
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev
})

export default config;
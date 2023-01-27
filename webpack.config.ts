import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolvers";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/build/types/configTypes";

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build')
  }

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3001;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config
};
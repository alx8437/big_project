import { IBuildOptions } from "./types/configTypes";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {

  return {
    port: options.port,
    open: false,
    //Allows to proxy requests through a specified index page (by default 'index.html'), useful for Single Page Applications that utilise the HTML5 History API.
    historyApiFallback: true,
  }
}
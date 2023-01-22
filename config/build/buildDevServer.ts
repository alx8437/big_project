import { IBuildOptions } from "./types/configTypes";
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: IBuildOptions): DevServerConfiguration {

  return {
    port: options.port,
    open: false,
  }
}
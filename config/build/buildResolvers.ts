import { ResolveOptions } from "webpack";
import {IBuildOptions} from "./types/configTypes";

export function buildResolvers(options: IBuildOptions): ResolveOptions {

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index'],
  }
}
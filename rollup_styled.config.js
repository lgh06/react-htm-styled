import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from '@rollup/plugin-commonjs';


// https://github.com/FredKSchott/rollup-plugin-polyfill-node
// https://github.com/rollup/plugins/tree/master/packages/node-resolve
// https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
export default {
  input: 'styled-components.esm.js', // styled source file, with some modifications.
  output: {
    file: 'styled-components.js', // output standalone styled file.
    format: 'esm'
  },
  external: [
  ],
  plugins: [
    nodeResolve({ preferBuiltins: false }),
    commonjs(),
    nodePolyfills( /* options */ ),
  ]
};
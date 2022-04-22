
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  external: ['react', 'react-dom'],
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    file: 'dist/umd/index.js',
    format: 'umd',
    sourcemap: true,
    name: pkg.name,
  },
  plugins: [
    json(),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      rootMode: 'upward',
    }),
    terser(),
    filesize({
      showMinifiedSize: false,
      showGzippedSize: true,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};

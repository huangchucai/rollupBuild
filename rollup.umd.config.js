import babel from '@rollup/plugin-babel'
import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import esbuild from 'rollup-plugin-esbuild'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


const isProduction = process.env.NODE_ENV === 'production'
const pluginsWithEnv = isProduction ? [] : [serve({
  open: true,
  openPage: '/base/',
  port: 10001,
  contentBase: ['dist', 'examples']
}), livereload('dist/umd')]


export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      file: path.resolve(__dirname, 'dist/umd/index.js'),
      format: 'umd',
      // 这个name属性非常重要，是通过 cdn 引入后，挂载到 window上的属性名
      name: 'hcc'
    }
  ],
  plugins: [
    esbuild({
      // 为了应对 umd 直接加载到浏览器里，构建目标需要设定得兼容性更强
      target: 'es2015'
    }),
    // 需要babel plugin
    babel({
      presets: ['@babel/preset-env'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    nodeResolve(),
    json(),
    commonjs(),
    ...pluginsWithEnv
  ],
}

import path from 'path'
export default {
  input: path.resolve(__dirname, './src/index.ts'),
  output: [
    {
      dir: path.resolve(__dirname, 'dist/esm'),
      format: 'esm', // 通过esm格式输出
    }
  ]
}

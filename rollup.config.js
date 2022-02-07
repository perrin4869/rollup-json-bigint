import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  output: { format: 'cjs', sourcemap: true, file: 'index.out.js' },
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
  ],
};

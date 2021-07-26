import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    name: "LNK",
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [typescript()],
};

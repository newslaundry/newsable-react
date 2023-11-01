import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  target: "esnext",
  external: ["react"],
  clean: true,
  splitting: true,
  minify: true
});

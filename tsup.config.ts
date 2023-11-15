import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  target: "esnext",
  external: ["react"],
  platform: "node",
  clean: true,
  splitting: true,
  sourcemap: true,
  onSuccess: "pnpm build:css"
  // treeshake: true
  // minify: true
});

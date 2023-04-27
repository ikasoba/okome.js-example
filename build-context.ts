import { context } from "esbuild";
import { globby as glob } from "globby";
import { copy } from "esbuild-plugin-copy";

export default await context({
  jsx: "transform",
  jsxImportSource: "@ikasoba000/okome.js",
  minify: true,
  sourcemap: "linked",
  bundle: true,
  entryPoints: await glob("./src/*.{tsx,ts}"),
  outdir: "./dist",
  plugins: [
    copy({
      resolveFrom: "cwd",
      assets: {
        from: ["./src/*.{html,css}"],
        to: ["./dist"],
      },
    }),
  ],
});

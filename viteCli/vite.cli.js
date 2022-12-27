const start = Date.now();
const {
  mode,
  entryPath,
} = require("./commander");
const { resolve } = require("path");
const colors = require("colors");
const { createServer, build } = require("vite");
const alias = require("./alias");

let config = {
  mode,
  configFile: false,
  root: resolve(__dirname, `../${entryPath}`),
  publicDir: resolve(__dirname, `../${entryPath}/static`),
  plugins:[],
  base: "./",
  resolve: {
    alias,
    extensions: [".js", ".ts", ".vue", ".mjs", ".cjs"],
  },
};

if (mode === "development") {
  config.server = {
    host: "0.0.0.0",
    port: 9000,
    open: true,
  };
} else {
  config.build = {
    reportCompressedSize: false,
    assetsInlineLimit: 5 * 1024, // base64
    sourcemap: false,
    outDir: resolve(
      __dirname,
      `../dist/${entryPath.replace(/^(ACT|COMMON)/, (type) =>
        type.toLowerCase()
      )}`
    ),
    emptyOutDir: true,
  };
}
(async () => {
  console.log(colors.green(`Vite config resolved: ${Date.now() - start}ms`));

  if (mode === "development") {
    const server = await createServer(config);
    await server.listen();
    server.printUrls();
  } else {
    await build(config);
  }
})();

const path = require("path");

module.exports = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: [
    "@devjobs/design-system",
    "@devjobs/ui",
    "@devjobs/icons",
    "@devjobs/utils",
  ],
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

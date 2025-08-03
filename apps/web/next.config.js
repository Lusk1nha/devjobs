const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: [
    "@devjobs/design-system",
    "@devjobs/ui",
    "@devjobs/icons",
    "@devjobs/utils",
  ],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

const path = require("path");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@devjobs/design-system", "@devjobs/ui"],
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
};

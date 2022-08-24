const withLess = require("next-with-less");
const path = require("path");

const pathToLessFileWithVariables = path.resolve(
  "./src/styles/theme.less"
);
/** @type {import('next').NextConfig} */
module.exports = withLess({
  lessLoaderOptions: {
    additionalData: (content) =>
      `${content}\n\n@import '${pathToLessFileWithVariables}';`,
  },
});
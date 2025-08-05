const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["md", "mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
})({});

// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    tags: { type: "string", required: false },
    // space-separated
    author: { type: "string", required: false },
    slide: { type: "boolean", required: false },
    published_at: { type: "date", required: true },
    image: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace(/^posts\//, "")
    },
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath.replace(/^posts\//, "")}`
    },
    date: {
      type: "date",
      resolve: (doc) => new Date(doc.published_at)
    },
    tagList: {
      type: "list",
      of: { type: "string" },
      resolve: (doc) => doc.tags ? doc.tags.split(/\s+/).filter(Boolean) : []
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]]
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YYIIL7MD.mjs.map

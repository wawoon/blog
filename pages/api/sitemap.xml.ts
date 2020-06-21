import { NowRequest, NowResponse } from "@now/node";
import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";
import postData from "../../post_data";

let sitemap: any;

module.exports = async (_req: NowRequest, res: NowResponse) => {
  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Content-Encoding", "gzip");
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap);
    return;
  }

  try {
    const stream = new SitemapStream({ hostname: "https://wawoon.dev" });
    const pipeline = stream.pipe(createGzip());
    stream.write({
      url: "/",
      changefreq: "daily",
      priority: 1,
    });

    for (const post of postData) {
      stream.write({
        url: `/posts/${post.filename.replace(".mdx", "")}`,
        changefreq: "daily",
        priority: 1,
      });
    }
    stream.end();
    streamToPromise(pipeline).then((sm) => (sitemap = sm));
    pipeline.pipe(res).on("error", (e) => {
      throw e;
    });
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

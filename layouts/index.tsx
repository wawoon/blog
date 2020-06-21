import React from "react";
import { PostMain } from "../components/posts/PostMain";
import { PostHeader } from "../components/posts/PostHeader";
import { Layout } from "../components/Layout";
import { NextSeo } from "next-seo";
import postData from "../post_data";

const LayoutWithPost = (frontMatter: FrontMatter) => {
  console.log(frontMatter);
  const file = postData.find(
    (post) =>
      post.filename === frontMatter.__resourcePath.replace("posts/", ""),
  );
  if (!file) {
    throw new Error("not found file");
  }

  let description =
    file.data.body
      .split("\n")
      .filter((s, i) => i > 0)
      .join("")
      .replace(/#/g, "")
      .replace(/\*/g, "")
      .replace(/~/g, "")
      .trim()
      .slice(0, 160) + "...";

  const Component: React.FC = (props) => {
    return (
      <Layout>
        <PostMain>
          <NextSeo title={frontMatter.title} description={description} />
          <PostHeader frontMatter={frontMatter} />
          {props.children}
        </PostMain>
      </Layout>
    );
  };
  return Component;
};

export default LayoutWithPost;

import React from "react";
import { PostMain } from "../components/posts/PostMain";
import { PostHeader } from "../components/posts/PostHeader";
import { Layout } from "../components/Layout";
import { NextSeo } from "next-seo";
import postData from "../post_data";

const LayoutWithPost = (frontMatter: FrontMatter) => {
  const file = postData.find(
    (post) =>
      post.filename === frontMatter.__resourcePath.replace("posts/", ""),
  );

  // 最初の行は意図的に無視する. export const config = { amp: true };などが含まれる想定なため。
  let description = file
    ? file.data.body
        .split("\n")
        .filter((s, i) => i > 0)
        .join("")
        .replace(/#/g, "")
        .replace(/\*/g, "")
        .replace(/~/g, "")
        .trim()
        .slice(0, 160) + "..."
    : "";

  const Component: React.FC = (props) => {
    return (
      <Layout>
        <PostMain>
          <NextSeo
            title={frontMatter.title}
            description={description}
            openGraph={{
              title: frontMatter.title,
              description: description,
              url: `https://wawoon.dev/${frontMatter.__resourcePath.replace(
                ".mdx",
                "",
              )}`,
            }}
          />
          <PostHeader frontMatter={frontMatter} />
          {props.children}
        </PostMain>
      </Layout>
    );
  };
  return Component;
};

export default LayoutWithPost;

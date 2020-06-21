import React from "react";
import { PostMain } from "../components/posts/PostMain";
import { PostHeader } from "../components/posts/PostHeader";
import { Layout } from "../components/Layout";
import { NextSeo } from "next-seo";

const LayoutWithPost = (frontMatter: FrontMatter) => {
  const Component: React.FC = (props) => {
    return (
      <Layout>
        <PostMain>
          <NextSeo title={frontMatter.title} />
          <PostHeader frontMatter={frontMatter} />
          {props.children}
        </PostMain>
      </Layout>
    );
  };
  return Component;
};

export default LayoutWithPost;

import React from "react";
import { PostMain } from "../components/posts/PostMain";
import { PostHeader } from "../components/posts/PostHeader";
import { Layout } from "../components/Layout";

const LayoutWithPost = (frontMatter: FrontMatter) => {
  const Component: React.FC = (props) => {
    return (
      <Layout>
        <PostMain>
          <PostHeader frontMatter={frontMatter} />
          {props.children}
        </PostMain>
      </Layout>
    );
  };
  return Component;
};

export default LayoutWithPost;

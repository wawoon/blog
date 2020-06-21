import postData from "../post_data";
import { Layout } from "../components/Layout";
import { css } from "@emotion/core";
import { PostCard } from "../components/PostCard";

export default () => {
  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 768px;
        `}
      >
        {postData.map((post, i) => (
          <PostCard key={`post-${i}`} post={post} />
        ))}
      </main>
    </Layout>
  );
};

export const config = { amp: true };

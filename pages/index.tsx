import postData from "../post_data";
import { Layout } from "../components/Layout";
import { css } from "@emotion/core";
import { PostCard } from "../components/PostCard";
import { NextSeo } from "next-seo";

export default () => {
  return (
    <Layout>
      <NextSeo
        title={"wawoon.dev"}
        titleTemplate="%s"
        description="This is a personal blog by Yoshinori Kosaka. I work as a software enginner in Japan."
      />
      <main
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 768px;
        `}
      >
        <h1
          css={css`
            font-size: 1.5em;
            margin-left: 8px;
          `}
        >
          About
        </h1>
        <div
          css={css`
            margin-left: 8px;
          `}
        >
          This is a personal blog by Yoshinori Kosaka. I work as a software
          enginner in Japan.
        </div>

        <h2
          css={css`
            margin-left: 8px;
          `}
        >
          BLOG
        </h2>
        {postData.map((post, i) => (
          <PostCard key={`post-${i}`} post={post} />
        ))}
      </main>
    </Layout>
  );
};

export const config = { amp: true };

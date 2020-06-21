import postData from "../../post_data";
import { Layout } from "../../components/Layout";
import { css } from "@emotion/core";
import { PostCard } from "../../components/PostCard";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

interface Props {
  matched: typeof postData;
}

export default (props: Props) => {
  const router = useRouter();

  return (
    <Layout>
      <main
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 768px;
        `}
      >
        <h1
          css={css`
            font-size: 20px;
            margin: 4px;
          `}
        >
          "{router.query.slug}"を含む記事
        </h1>
        {props.matched.map((post, i) => (
          <PostCard key={`post-${i}`} post={post} />
        ))}
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const matched = postData.filter((post) =>
    post.data.attributes.tags.includes((ctx?.params?.slug as string) || ""),
  );
  return { props: { matched } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = new Set<string>();
  for (const post of postData) {
    const tag_list = post.data.attributes.tags.split(" ");
    for (const tag of tag_list) {
      tags.add(tag);
    }
  }

  const paths: { params: { slug: string } }[] = [];
  for (const tag of tags) {
    paths.push({ params: { slug: tag } });
  }
  return {
    paths: paths,
    fallback: false,
  };
};

export const config = { amp: true };

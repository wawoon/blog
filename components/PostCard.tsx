import postData from "../post_data";
import { css } from "@emotion/core";
import { dateToString } from "../lib/date";
import { PostTag, PostTagContainer } from "../components/PostTag";
import Link from "next/link";

export const PostCard = (props: { post: typeof postData[0] }) => {
  const { post } = props;
  const slug = post.filename.replace(".mdx", "");
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <a style={{ textDecoration: "none" }}>
        <div
          css={css`
            padding: 8px;
            margin: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
          `}
        >
          <div
            css={css`
              font-weight: bold;
              font-size: 16px;
            `}
          >
            {post.data.attributes.title}
          </div>
          <PostTagContainer>
            {post.data.attributes.tags.split(" ").map((tag, i) => {
              return <PostTag key={`tag-${i}`}>{tag}</PostTag>;
            })}
          </PostTagContainer>
          {(() => {
            const date = new Date(post.data.attributes.published_at);
            if (date) {
              return (
                <div
                  css={css`
                    display: flex;
                    justify-content: flex-end;
                    color: #666;
                    font-size: 10px;
                  `}
                >
                  公開日: {dateToString(date)}
                </div>
              );
            } else {
              return null;
            }
          })()}
        </div>
      </a>
    </Link>
  );
};

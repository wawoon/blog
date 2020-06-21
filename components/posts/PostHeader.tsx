import React from "react";
import { css } from "@emotion/core";
import { dateToString } from "../../lib/date";
import { PostTagContainer, PostTag } from "../PostTag";
import Link from "next/link";

export const PostHeader = ({ frontMatter }: { frontMatter: FrontMatter }) => {
  return (
    <div>
      <h1
        css={css`
          font-size: 2rem;
        `}
      >
        {frontMatter.title}
      </h1>
      <div
        css={css`
          font-size: 12px;
          display: flex;
          justify-content: space-between;
        `}
      >
        <PostTagContainer
          css={css`
            a {
              text-decoration: none;
            }
          `}
        >
          {frontMatter.tags.split(" ").map((tag, i) => {
            return (
              <Link href={`/tags/[slug]`} as={`/tags/${tag}`}>
                <a>
                  <PostTag key={`tag-${i}`}>{tag}</PostTag>
                </a>
              </Link>
            );
          })}
        </PostTagContainer>
        <div
          css={css`
            display: flex;
          `}
        >
          公開日: {dateToString(new Date(frontMatter.published_at))}
          <a
            href={`https://github.com/wawoon/blog/blob/master/pages/${frontMatter.__resourcePath}`}
            target="_blank"
            rel="noopener noreferrer"
            css={css`
              margin-left: 8px;
            `}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

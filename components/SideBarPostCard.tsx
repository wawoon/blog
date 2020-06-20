import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import fileData from "../post_data";
import { dateToString } from "../lib/date";
import { PostTagContainer, PostTag } from "./PostTag";

export const SideBarPostCard = (props: { file: typeof fileData[0] }) => {
  const file = props.file;
  const slug = file.filename.replace(".mdx", "");
  console.log("sidebarpost", props);
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <a style={{ textDecoration: "none" }}>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 8px;
            border-bottom: 1px solid #eee;
            font-size: 14px;
            line-height: 1.7;
            min-height: 50px;
          `}
        >
          {file.data.attributes.title}
          <PostTagContainer>
            {file.data.attributes.tags.split(" ").map((tag, i) => {
              return <PostTag key={`tag-${i}`}>{tag}</PostTag>;
            })}
          </PostTagContainer>
          {(() => {
            const date = new Date(file.data.attributes.published_at);
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

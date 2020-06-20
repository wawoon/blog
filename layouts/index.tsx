import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import fileData from "../post_data";
import { Header } from "../components/Header";
import { SideBarPostCard } from "../components/SideBarPostCard";
import { PostMain } from "../components/posts/PostHeader";
import { PostHeader } from "../components/posts/PostMain";

const Layout = (frontMatter: FrontMatter) => {
  const Component: React.FC = (props) => {
    return (
      <div css={css``}>
        <Header />
        <div
          css={css`
            ${tw`flex flex-col-reverse md:flex-row`}
          `}
        >
          <div
            css={css`
              ${tw`w-full`}
              ${tw`md:w-1/4 lg:w-1/5`}
            `}
          >
            <div
              css={css`
                position: sticky;
                top: 0;
                display: flex;
                flex-direction: column;
                overflow-y: scroll;
                max-height: 100vh;
              `}
            >
              {fileData.map((file) => {
                const slug = file.filename.replace(".mdx", "");
                return <SideBarPostCard key={slug} file={file} />;
              })}
            </div>
          </div>
          <div
            css={css`
              flex: 1;
              overflow: auto;
              word-break: break-word;
              background: #eef0f1;

              ${tw`md:p-4`}
            `}
          >
            <PostMain>
              <PostHeader frontMatter={frontMatter} />
              {props.children}
            </PostMain>
            <div
              css={css`
                font-size: 12px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #999;
              `}
            >
              <div
                css={css`
                  margin-bottom: 8px;
                `}
              >
                powered by Next.js
              </div>
              <a
                href="https://github.com/wawoon/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                source
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return Component;
};

export default Layout;

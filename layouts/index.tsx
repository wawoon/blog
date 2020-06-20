import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";
import fileData from "../post_data";

const HeaderLink = styled.a`
  ${tw`text-red-600`}
  :not(:last-child) {
    margin-right: 8px;
  }
`;

const dateToString = (date: Date) => {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

const SideBarPostCard = (props: { file: typeof fileData[0] }) => {
  const file = props.file;
  const slug = file.filename.replace(".mdx", "");
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

const Header = () => {
  return (
    <div
      css={css`
        height: 60px;
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
        background: white;
        z-index: 1;
        font-weight: bold;
        border-bottom: 2px solid #eee;
      `}
    >
      <div
        css={css`
          font-weight: bold;
          padding: 12px;
        `}
      >
        <Link href={"/"} passHref>
          <a
            css={css`
              text-decoration: none;
            `}
          >
            wawoon.dev
          </a>
        </Link>
      </div>
      <div
        css={css`
          padding: 12px;
        `}
      >
        <HeaderLink href="https://twitter.com/wawoon_jp">Twitter</HeaderLink>
        <HeaderLink href="https://github.com/wawoon">GitHub</HeaderLink>
        <HeaderLink href="https://atcoder.jp/users/wawoon">AtCoder</HeaderLink>
      </div>
    </div>
  );
};

const Layout = (frontMatter: any) => {
  console.log(frontMatter);

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
            <div
              css={css`
                box-sizing: border-box;
                max-width: 1000px;
                margin: 0 auto;
                background: #fff;
                line-height: 1.7;
                border-radius: 3px;
                border: 1px solid #ccc;

                ${tw`p-4 mt-4 mb-4 md:p-8`}
              `}
            >
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
                  justify-content: flex-end;
                `}
              >
                公開日: {dateToString(frontMatter.published_at)}
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
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return Component;
};

export default Layout;

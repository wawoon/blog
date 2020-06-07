import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const fileData: {
  filename: string;
  data: {
    attributes: any;
    body: string;
    bodyBegin: number;
    frontmatter: string;
  };
}[] =
  //@ts-ignore
  preval`
  const fs = require('fs');
  const path = require('path');
  const fm = require('front-matter');

  const postDirPath = 'pages/posts';
  const postsDirectory = path.join(process.cwd(), postDirPath)
  const mdxFiles = fs.readdirSync(postsDirectory)
  let list = [];

  for (const filename of mdxFiles) {
    const content = fs.readFileSync(path.join(process.cwd(), postDirPath, filename), { encoding: "utf-8" });
    const data = fm(content);
    const { attributes, body } = data;
    list.push({ filename, data: { attributes, body } });
  }

  module.exports = list;
`;

const HeaderLink = styled.a`
  ${tw`text-red-600`}
  :not(:last-child) {
    margin-right: 8px;
  }
`;

const Layout = (frontMatter: any) => {
  const Component: React.FC = (props) => {
    return (
      <div css={css``}>
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
            <HeaderLink href="https://twitter.com/wawoon_jp">
              Twitter
            </HeaderLink>
            <HeaderLink href="https://github.com/wawoon">GitHub</HeaderLink>
            <HeaderLink href="https://atcoder.jp/users/wawoon">
              AtCoder
            </HeaderLink>
          </div>
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              width: 240px;
              border-right: 1px solid #eee;
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
                return (
                  <Link href={`/posts/${file.filename.replace(".mdx", "")}`}>
                    <a>
                      <div
                        css={css`
                          display: flex;
                          padding: 12px;
                          border-bottom: 1px solid #eee;
                          font-size: 14px;
                          line-height: 1.7;
                          min-height: 50px;
                        `}
                      >
                        {file.data.attributes.title}
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div
            css={css`
              flex: 1;
              padding: 12px;
              overflow: auto;
              word-break: break-word;
              background: #eef0f1;
            `}
          >
            <div
              css={css`
                box-sizing: border-box;
                max-width: 850px;
                margin: 0 auto;
                background: #fff;
                padding: 24px;
                line-height: 1.7;
                border-radius: 3px;
                border: 1px solid #ccc;
              `}
            >
              <h1
                css={css`
                  font-size: 2rem;
                `}
              >
                {frontMatter.title}
              </h1>
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

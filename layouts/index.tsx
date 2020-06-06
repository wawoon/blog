import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";

// @ts-ignore
const filenames: string[] = preval`
  const fs = require('fs');
  const path = require('path');

  const postsDirectory = path.join(process.cwd(), 'pages/posts')
  const mdxFiles = fs.readdirSync(postsDirectory)
  // console.log('the queried pages', mdxFiles)
  // Loop through all post files and create array of slugs (to create links)
  const paths = mdxFiles.map(filename => filename.replace(".mdx", ""));
  module.exports = paths;
`;

const Layout = (frontMatter: any) => {
  const Component: React.FC = (props) => {
    return (
      <div>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              width: 240px;
              border-right: 1px solid #eee;
            `}
          >
            {filenames.map((name) => {
              return (
                <Link href={`/posts/${name}`}>
                  <a>{name}</a>
                </Link>
              );
            })}
          </div>
          <div
            css={css`
              flex: 1;
              padding: 12px;
            `}
          >
            <h1>{frontMatter.title}</h1>
            {props.children}
          </div>
        </div>
      </div>
    );
  };
  return Component;
};

export default Layout;

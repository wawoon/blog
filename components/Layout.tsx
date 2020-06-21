import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import { Header } from "./Header";

export const Layout: React.FC = (props) => {
  return (
    <div
      css={css`
        background: #fffff;
      `}
    >
      <div
        css={css`
          ${tw`flex`}
        `}
      >
        <div
          css={css`
            flex: 1;
            overflow: auto;
          `}
        >
          <Header />
          <div
            css={css`
              word-break: break-word;
              ${tw`md:p-4`}
            `}
          >
            {props.children}
            <div
              css={css`
                font-size: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #999;
                margin-top: 24px;
                margin-bottom: 24px;
              `}
            >
              <div
                css={css`
                  margin-right: 8px;
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
    </div>
  );
};

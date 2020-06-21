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
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #999;
                margin-top: 24px;
                margin-bottom: 24px;
              `}
            >
              <div
                css={css`
                  margin-bottom: 8px;
                `}
              >
                This site uses Google Analytics.
              </div>
              <a
                css={css`
                  margin-bottom: 8px;
                `}
                href="https://github.com/wawoon/blog"
                target="_blank"
                rel="noopener noreferrer"
              >
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

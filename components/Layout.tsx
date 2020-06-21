import React from "react";
import { css } from "@emotion/core";
import tw from "tailwind.macro";
import fileData from "../post_data";
import { Header } from "./Header";
import { SideBarPostCard } from "./SideBarPostCard";
import { useWindowSize } from "../hooks/useWIndowSize";

export const Layout: React.FC = (props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const size = useWindowSize();
  const showSidebar = sidebarOpen || (size.width && size.width < 768);

  return (
    <div
      css={css`
        background: #fffff;
      `}
    >
      <div
        css={css`
          ${tw`flex flex-col-reverse md:flex-row`}
        `}
      >
        <div
          css={css`
            background: #fff;
            transition: 0.3s;
            ${tw`w-full`}
            ${tw`md:w-1/4 lg:w-1/5`}
          `}
          style={showSidebar ? {} : { width: 0 }}
        >
          <div
            css={css`
              position: sticky;
              top: 0;
              display: flex;
              flex-direction: column;
              overflow-y: scroll;
              max-height: 100vh;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
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
          `}
        >
          <Header
            sidebarOpen={sidebarOpen}
            sidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          />
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

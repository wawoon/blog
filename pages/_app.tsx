import React from "react";
import App from "next/app";
import { CacheProvider, css } from "@emotion/core";
import { cache } from "emotion";
import { MDXProvider } from "@mdx-js/react";
import "normalize.css"; // amp対応するときは書き換えする
import { CodeBlock } from "../components/posts/CodeBlock";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        <MDXProvider
          components={{
            img: (props) => {
              return (
                <div
                  css={css`
                    width: 100%;
                    display: flex;
                    jusitfy-content: center;
                  `}
                >
                  <img
                    css={css`
                      margin: 0 auto;
                      box-sizing: border-box;
                      width: 100%;
                      max-width: 600px;
                      max-height: 600px;
                      object-fit: contain;
                    `}
                    src={props.src}
                  />
                </div>
              );
            },
            // pre: (props) => {
            //   return (
            //     <pre
            //       css={css`
            //         box-sizing: border-box;
            //         width: 100%;
            //         background: #eee;
            //         padding: 12px;
            //         overflow: auto;
            //       `}
            //     >
            //       {props.children}
            //     </pre>
            //   );
            // },
            code: (props) => (
              <CodeBlock className={props.className}>
                {props.children}
              </CodeBlock>
            ),
            inlineCode: (props) => {
              return (
                <code
                  css={css`
                    box-sizing: border-box;
                    width: 100%;
                    line-height: 1.9;
                    box-sizing: inherit;
                    background-color: #eee;
                    color: #333;
                    padding: 0.1em 0.4em;
                  `}
                >
                  {props.children}
                </code>
              );
            },
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </CacheProvider>
    );
  }
}

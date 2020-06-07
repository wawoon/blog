import React from "react";
import App from "next/app";
import { CacheProvider, css } from "@emotion/core";
import { cache } from "emotion";
import { MDXProvider } from "@mdx-js/react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        <MDXProvider
          components={{
            img: (props) => {
              return (
                <img
                  css={css`
                    width: 100%;
                  `}
                  src={props.src}
                />
              );
            },
            pre: (props) => {
              return (
                <pre
                  css={css`
                    width: 100%;
                    background: #eee;
                    padding: 12px;
                  `}
                >
                  {props.children}
                </pre>
              );
            },
            code: (props) => (
              <code
                css={css`
                  width: 100%;
                  color: #333;
                `}
              >
                {props.children}
              </code>
            ),
            inlineCode: (props) => {
              return (
                <code
                  css={css`
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

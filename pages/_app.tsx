import React from "react";
import App from "next/app";
import { CacheProvider, css, Global } from "@emotion/core";
import { cache } from "emotion";
import { MDXProvider } from "@mdx-js/react";
import "normalize.css"; // amp対応するときは書き換えする
import { CodeBlock } from "../components/posts/CodeBlock";
import { useAmp } from "next/amp";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { AmpGAStarter } from "../components/amp/AmpGAStarter";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        <MDXProvider
          components={{
            img: (props) => {
              const isAmp = useAmp();
              if (isAmp) {
                return (
                  <div
                    css={css`
                      position: relative;
                      width: 100%;
                      height: 400px;
                      display: flex;
                      align-items: center;
                      justify-content: center;

                      amp-img img {
                        object-fit: contain;
                      }
                  `}>
                    <amp-img src={props.src} layout="fill" />
                  </div>
                );
              }
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
          <DefaultSeo {...SEO} />
          <Global styles={css`
            body {
              font-family: "Helvetica Neue",
              Arial,
              "Hiragino Kaku Gothic ProN",
              "Hiragino Sans",
              Meiryo,
              sans-serif;
            }
          `} />
          <Component {...pageProps} />
          <AmpGAStarter />
        </MDXProvider>
      </CacheProvider>
    );
  }
}

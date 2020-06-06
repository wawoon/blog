import React from "react";
import App from "next/app";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={cache}>
        <Component {...pageProps} />
      </CacheProvider>
    );
  }
}

import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { extractCritical } from "emotion-server";
import { useAmp } from "next/amp";

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const page = ctx.renderPage();
    const styles = extractCritical(page.html);
    return {
      ...page,
      ...styles,
    };
  }

  render() {
    return (
      <Html lang="ja" amp="amp">
        <Head>
          <meta charSet="UTF-8" />
          <StyleTag
            // @ts-ignore
            emotionIds={this.props.ids}
            // @ts-ignore
            emotionCss={this.props.css}
          />
          <AmpScripts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const StyleTag: React.FC<{
  emotionIds: any;
  emotionCss: string;
}> = (props) => {
  const isAmp = useAmp();
  if (isAmp) {
    return (
      <>
        <noscript>
          <style amp-boilerplate>
            {
              "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}"
            }
          </style>
        </noscript>
        <style
          amp-custom="amp-custom"
          dangerouslySetInnerHTML={{
            __html: props.emotionCss || "",
          }}
        />
      </>
    );
  }

  return (
    <>
      <style
        data-emotion-css={(props.emotionIds || []).join(" ")}
        dangerouslySetInnerHTML={{ __html: props.emotionCss || "" }}
      />
    </>
  );
};

const AmpScripts = () => {
  const isAmp = useAmp();
  if (!isAmp) {
    return null;
  }

  return (
    <>
      <script
        async
        custom-element="amp-carousel"
        src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js"
      />
      <script
        async
        custom-element="amp-sidebar"
        src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
      />
      <script
        async
        custom-element="amp-iframe"
        src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
      />
      <script
        async
        custom-element="amp-ad"
        src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
      />
      <script
        async
        custom-element="amp-form"
        src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
      ></script>
    </>
  );
};

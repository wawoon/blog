import React from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
// @ts-ignore
import Prism from "prism-react-renderer/prism";
((typeof global !== "undefined" ? global : window) as any).Prism = Prism;

require("prismjs/components/prism-ruby");
require("prismjs/components/prism-graphql");

export const CodeBlock = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  console.log("className", className);
  const language = className
    ? (className.replace(/language-/, "") as Language)
    : "markup";

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

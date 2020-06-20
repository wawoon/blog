import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tw from "tailwind.macro";

const HeaderLink = styled.a`
  ${tw`text-red-600`}
  :not(:last-child) {
    margin-right: 8px;
  }
`;

interface Props {
  sidebarToggle: () => void;
}

export const Header = (props: Props) => {
  return (
    <div
      css={css`
        height: 48px;
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
        background: white;
        z-index: 1;
        font-weight: bold;
        border-bottom: 2px solid #eee;
      `}
    >
      <div css={css``} onClick={props.sidebarToggle}>
        toggle
      </div>
      <div
        css={css`
          font-weight: bold;
          padding: 12px;
        `}
      >
        <Link href={"/"} passHref>
          <a
            css={css`
              text-decoration: none;
            `}
          >
            wawoon.dev
          </a>
        </Link>
      </div>
      <div
        css={css`
          padding: 12px;
        `}
      >
        <HeaderLink href="https://twitter.com/wawoon_jp">Twitter</HeaderLink>
        <HeaderLink href="https://github.com/wawoon">GitHub</HeaderLink>
        <HeaderLink href="https://atcoder.jp/users/wawoon">AtCoder</HeaderLink>
      </div>
    </div>
  );
};

import { css } from "@emotion/core";

const Header = () => {
  return (
    <div
      css={css`
        height: 60px;
        background: #eee;
      `}
    >
      Header
    </div>
  );
};

export default () => {
  return (
    <div>
      <Header />
      <h1>Hello, world</h1>
    </div>
  );
};

export const config = { amp: "hybrid" };

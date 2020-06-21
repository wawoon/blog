import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const PostMain = styled.main`
  box-sizing: border-box;
  max-width: 768px;
  margin: 0 auto;
  line-height: 1.7;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 28px 28px 56px #a6a6a6, -28px -28px 56px #ffffff;

  ${tw`p-4 mt-4 mb-4 md:p-8`}
`;

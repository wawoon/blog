import tw from "tailwind.macro";
import styled from "@emotion/styled";

export const PostMain = styled.main`
  box-sizing: border-box;
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  line-height: 1.7;
  border-radius: 3px;
  border: 1px solid #ccc;

  ${tw`p-4 mt-4 mb-4 md:p-8`}
`;

import { useRouter } from "next/router";
import { NextPage } from "next";

export const createRedirectComponent = (props: {
  redirectTo: string;
  statusCode: number;
}) => {
  const Redirect: NextPage = () => {
    const router = useRouter();
    router.replace(props.redirectTo);

    return null;
  };

  Redirect.getInitialProps = async ({ res }) => {
    if (res) {
      res.writeHead(props.statusCode, { Location: props.redirectTo });
      res.end();
      return {};
    }
    return {};
  };

  return Redirect;
};

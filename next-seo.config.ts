import NextSEO from "next-seo";

export const config: NextSEO.NextSeoProps = {
  titleTemplate: "%s | wawoon",
  twitter: {
    cardType: "summary",
    handle: "@wawoon_jp",
    site: "@wawoon_jp",
  },
};

export default config;

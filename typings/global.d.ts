declare module "babel-plugin-preval/macro";
declare module "tailwind.macro";

type FrontMatter = {
  tags: string;
  title: any;
  published_at: string;
  image?: string;
  __resourcePath: string;
};

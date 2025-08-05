declare module "babel-plugin-preval/macro";
declare module "tailwind.macro";

type FrontMatter = {
  tags: string;
  title: string;
  published_at: string;
  image?: string;
  __resourcePath: string;
};

/**
 * Extend the Window interface so that we don’t have to cast to `any` when
 * assigning `Prism` for syntax-highlighting at runtime.
 *
 * NOTE: The import is `type`-only so it will be removed from the emitted
 * JavaScript bundle and therefore has no impact on client size.
 */
import type PrismType from "prism-react-renderer/prism";

declare global {
  // eslint-disable-next-line no-var
  var Prism: PrismType | undefined;
  interface Window {
    Prism: PrismType;
  }
}


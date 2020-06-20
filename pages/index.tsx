import { createRedirectComponent } from "../lib/redirect";
import postData from "../post_data";
const latestPostSlug = postData[0].filename.replace(".mdx", "");

export default createRedirectComponent({
  redirectTo: `/posts/${latestPostSlug}`,
  statusCode: 301,
});

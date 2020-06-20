// @preval
const fs = require("fs");
const path = require("path");
const fm = require("front-matter");

const postDirPath = "pages/posts";
const postsDirectory = path.join(process.cwd(), postDirPath);
const mdxFiles = fs.readdirSync(postsDirectory);
let list = [];

for (const filename of mdxFiles) {
  if (!filename.includes(".md")) {
    continue;
  }

  const content = fs.readFileSync(
    path.join(process.cwd(), postDirPath, filename),
    { encoding: "utf-8" },
  );
  const data = fm(content);
  const { attributes, body } = data;
  list.push({
    filename,
    data: { attributes, body },
  });
}

list.sort((a, b) => {
  const aa = new Date(a.data.attributes.published_at).getTime();
  const bb = new Date(b.data.attributes.published_at).getTime();
  return aa < bb ? 1 : -1;
});

module.exports = list;

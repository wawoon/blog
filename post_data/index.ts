const raw = require("./raw");

type FileData = {
  filename: string;
  data: {
    attributes: {
      title: string;
      tags: string;
      published_at: string;
    };
    body: string;
  };
}[];

// console.log(Object.keys(raw));

export default raw as FileData;

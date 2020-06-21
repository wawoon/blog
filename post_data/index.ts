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

export default raw as FileData;

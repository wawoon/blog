const raw = require("./raw");

type FileData = {
  filename: string;
  data: {
    attributes: any;
    body: string;
  };
}[];

export default raw as FileData;

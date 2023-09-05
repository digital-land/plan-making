import AWS from "aws-sdk";
import { FormState } from "./types";

AWS.config.apiVersions = {
  s3: "2006-03-01",
};

const S3_BUCKET = "dluhc-poc";

const s3_config = {
  accessKeyId: "testaccesskey",
  secretAccessKey: "testsecretkey",
  endpoint: "http://127.0.0.1:9000",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
};

const S3_CLIENT = new AWS.S3(s3_config);

export const uploadFile = async (key: string, body: FormState) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: `${key}.json`,
    Body: JSON.stringify(body),
    ContentType: "application/json; charset=utf-8",
  };

  const upload = S3_CLIENT.putObject(params)
    .on("httpUploadProgress", () => console.log("Uploading file"))
    .promise();

  await upload.then((err: any) => {
    console.log(err);
    alert("Form uploaded successfully.");
  });
};

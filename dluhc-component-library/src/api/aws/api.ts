import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { FormState } from "src/components/siteSelectionForm/types";

const S3_BUCKET = "dluhc-poc";

const s3Client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "testaccesskey",
    secretAccessKey: "testsecretkey",
  },
  endpoint: "http://127.0.0.1:9000",
});

export const uploadFile = async (key: string, body: FormState) => {
  const params = {
    Bucket: S3_BUCKET,
    Key: `${key}.json`,
    Body: JSON.stringify(body),
    ContentType: "application/json; charset=utf-8",
  };

  s3Client
    .send(new PutObjectCommand(params))
    .then(() => {
      alert("Form uploaded successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
};

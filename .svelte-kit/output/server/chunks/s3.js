import { d as private_env } from "./shared-server.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import "@smithy/types";
class S3 {
  s3Client;
  constructor(s3Client2) {
    this.s3Client = s3Client2;
  }
  async generateFileUrl(bucketName, fileName) {
    const region = await s3Client.config.region();
    return `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
  }
  async uploadFile(file, bucketName) {
    try {
      const fileBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(fileBuffer);
      const fileName = crypto.randomUUID();
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: fileName,
        Body: buffer,
        ContentType: file.type
      });
      await this.s3Client.send(command);
      const fileUrl = await this.generateFileUrl(bucketName, fileName);
      return fileUrl;
    } catch (error) {
      throw new Error(`Failed to upload file`, { cause: error });
    }
  }
}
const credentials = {
  accessKeyId: private_env.AWS_ACCESS_KEY_ID,
  secretAccessKey: private_env.AWS_SECRET_ACCESS_KEY
};
const s3Client = new S3Client({
  region: private_env.AWS_REGION,
  credentials
});
const s3 = new S3(s3Client);
export {
  s3 as s
};

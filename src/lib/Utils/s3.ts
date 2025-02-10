import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { type Credentials } from '@aws-sdk/types';
import { env } from '$env/dynamic/private';

const credentials: Credentials = {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    sessionToken: undefined,
    expiration: undefined,

};

const s3Client = new S3Client({
    region: env.AWS_REGION,
    credentials,
    forcePathStyle: true,
});

export const uploadFileToS3 = async (
    file: File,
    folder: string
): Promise<string> => {
    const fileBuffer = await file.arrayBuffer();
    const fileName = `${folder}/${Date.now()}-${file.name}`;

    try {
        await s3Client.send(new PutObjectCommand({
            Bucket: env.AWS_BUCKET_NAME,
            Key: fileName,
            Body: Buffer.from(fileBuffer),
            ContentType: file.type,
        }));

        return `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${fileName}`;
    } catch (error) {
        console.error('Error uploading file to S3:', error);
        throw new Error(`Failed to upload file to ${folder}`);
    }
};
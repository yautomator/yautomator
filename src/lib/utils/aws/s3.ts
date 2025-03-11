import { env } from '$env/dynamic/private';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { type AwsCredentialIdentity } from '@smithy/types';

class S3 {
	private s3Client: S3Client;

	constructor(s3Client: S3Client) {
		this.s3Client = s3Client;
	}

	private async generateFileUrl(bucketName: string, fileName: string): Promise<string> {
		const region = await s3Client.config.region();
		return `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
	}

	public async uploadFile(file: File, bucketName: string): Promise<string> {
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

const credentials: AwsCredentialIdentity = {
	accessKeyId: env.AWS_ACCESS_KEY_ID,
	secretAccessKey: env.AWS_SECRET_ACCESS_KEY
};

const s3Client = new S3Client({
	region: env.AWS_REGION,
	credentials
});

export const s3 = new S3(s3Client);

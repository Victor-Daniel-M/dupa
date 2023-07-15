import { CONSTANTS } from '@common/constants';
import { Injectable } from '@nestjs/common';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class S3Provider {
  private _s3: S3;
  private _bucketName: string;

  constructor() {
    (this._bucketName = CONSTANTS.AWS_BUCKET_NAME!),
      (this._s3 = new S3({
        accessKeyId: CONSTANTS.AWS_ACCESS_KEY_ID,
        secretAccessKey: CONSTANTS.AWS_SECRET_ACCESS_KEY,
        endpoint: CONSTANTS.LOCALSTACK_HOST,
        s3ForcePathStyle: true,
        region: CONSTANTS.AWS_REGION,
        logger: console,
      }));
  }

  getBucketName() {
    return this._bucketName;
  }

  createBucket() {
    this._s3.createBucket({ Bucket: 'testbucket' }, (err, data) => {
      // console.log(err, data);
    });
  }

  async upload(file) {
    const { originalname } = file;
    const S3bucket = this.getBucketName();
    return await this.uploadS3(file.buffer, S3bucket, originalname);
  }

  async uploadS3(file, bucket, name) {
    const s3Params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
    };

    const data = await this.uploadImageToS3(s3Params);
    return data;
  }

  async uploadImageToS3(s3Params): Promise<{
    ETag: string;
    Location: string;
    key: string;
    Key: string;
    Bucket: string;
  }> {
    return new Promise((resolve, reject) => {
      this._s3.upload(s3Params, (err, data) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(data);
      });
    });
  }
}

/* Create a bucket (run this once)*/
// new S3ConfigProvider().createBucket();

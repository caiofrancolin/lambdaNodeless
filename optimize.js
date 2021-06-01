'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.handle = async ({ Records: records }, context) => {
  try {
    await Promise.all(records.map( record => {
      const { key } = record.s3.object;

      const image = await S3.getObject({
        Bucket: Process.env.bucket,
        Key: key,
      }).promise();

      
    }));
  
    return {
      statusCode: 301,
      body: {}
    }
  } catch (err) {
    return err;
  }
};

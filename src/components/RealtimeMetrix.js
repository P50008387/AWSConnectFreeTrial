var params = {
    InstanceId: 'STRING_VALUE', /* required */
    ResourceType: CHAT_TRANSCRIPTS | CALL_RECORDINGS | SCHEDULED_REPORTS | MEDIA_STREAMS | CONTACT_TRACE_RECORDS | AGENT_EVENTS, /* required */
    StorageConfig: { /* required */
        StorageType: S3 | KINESIS_VIDEO_STREAM | KINESIS_STREAM | KINESIS_FIREHOSE, /* required */
        AssociationId: 'STRING_VALUE',
        KinesisFirehoseConfig: {
            FirehoseArn: 'STRING_VALUE' /* required */
        },
        KinesisStreamConfig: {
            StreamArn: 'STRING_VALUE' /* required */
        },
        KinesisVideoStreamConfig: {
            EncryptionConfig: { /* required */
                EncryptionType: KMS, /* required */
                KeyId: 'STRING_VALUE' /* required */
            },
            Prefix: 'STRING_VALUE', /* required */
            RetentionPeriodHours: 'NUMBER_VALUE' /* required */
        },
        S3Config: {
            BucketName: 'STRING_VALUE', /* required */
            BucketPrefix: 'STRING_VALUE', /* required */
            EncryptionConfig: {
                EncryptionType: KMS, /* required */
                KeyId: 'STRING_VALUE' /* required */
            }
        }
    }
};
connect.associateInstanceStorageConfig(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});
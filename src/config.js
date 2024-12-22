const config = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-api-uploads-sekhar",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://jn6lmsofqh.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_4HwWEEUqK",
        APP_CLIENT_ID: "7mf2849a3q6rpsvkepctk7t7sp",
        IDENTITY_POOL_ID: "us-east-1:a5d433b2-7ff1-4157-821b-9334c785735b",
    },
};
export default config;

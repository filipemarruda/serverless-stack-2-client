/* eslint-disable no-undef */
const dev = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-u0og9gjovu96',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://api.rwme.xyz/dev',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_gC1sPWT5J',
    APP_CLIENT_ID: '2c5rqjqhu2n6jki39dj2uhhi9d',
    IDENTITY_POOL_ID: 'us-east-1:bd46bedc-7a14-4873-bd01-c04931212a47',
  },
  STRIPE_KEY: 'pk_test_wjU13CwdvmvLjgUcxkh4Sj4y00A9sUF27V',
};

const prod = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1ngrict3r9uoz',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://api.rwme.xyz/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_9Wn9tE6kt',
    APP_CLIENT_ID: '4pg74imtdm2oq8t348n42agvvk',
    IDENTITY_POOL_ID: 'us-east-1:1e6b511e-a010-4f91-83bd-05a1bdef7bdc',
  },
  STRIPE_KEY: 'pk_test_wjU13CwdvmvLjgUcxkh4Sj4y00A9sUF27V',
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};

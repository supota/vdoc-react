import Firebase from 'firebase';

let firebaseConfig: Record<string, string> = {};

switch (process.env.NODE_ENV) {
  case 'development':
    firebaseConfig = {
      apiKey: process.env.FB_DEV_API_KEY as string,
      authDomain: process.env.FB_DEV_AUTH_DOMAIN as string,
      databaseURL: process.env.FB_DEV_DATABASE_URL as string,
      projectId: process.env.FB_DEV_PROJECT_ID as string,
      storageBucket: process.env.FB_DEV_STORAGE_BUCKET as string,
      messagingSenderId: process.env.FB_DEV_MESSAGING_SENDER_ID as string,
      appId: process.env.FB_DEV_APP_ID as string,
    };
    break;

  case 'production':
    firebaseConfig = {
      apiKey: process.env.FB_PROD_API_KEY as string,
      authDomain: process.env.FB_PROD_AUTH_DOMAIN as string,
      databaseURL: process.env.FB_PROD_DATABASE_URL as string,
      projectId: process.env.FB_PROD_PROJECT_ID as string,
      storageBucket: process.env.FB_PROD_STORAGE_BUCKET as string,
      messagingSenderId: process.env.FB_PROD_MESSAGING_SENDER_ID as string,
      appId: process.env.FB_PROD_APP_ID as string,
      measurementId: process.env.FB_PROD_MEASUREMENT_ID as string,
    };
    break;

  default:
    firebaseConfig = {};
    break;
}

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };

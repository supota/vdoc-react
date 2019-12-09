import Firebase from 'firebase';

let firebaseConfig: Object;

switch(process.env.NODE_ENV) {

  case 'development':
    firebaseConfig = {
      apiKey: process.env.FB_DEV_API_KEY,
      authDomain: process.env.FB_DEV_AUTH_DOMAIN,
      databaseURL: process.env.FB_DEV_DATABASE_URL,
      projectId: process.env.FB_DEV_PROJECT_ID,
      storageBucket: process.env.FB_DEV_STORAGE_BUCKET,
      messagingSenderId: process.env.FB_DEV_MESSAGING_SENDER_ID,
      appId: process.env.FB_DEV_APP_ID
    };
    break;

  case 'production':
    firebaseConfig = {
      apiKey: process.env.FB_PROD_API_KEY,
      authDomain: process.env.FB_PROD_AUTH_DOMAIN,
      databaseURL: process.env.FB_PROD_DATABASE_URL,
      projectId: process.env.FB_PROD_PROJECT_ID,
      storageBucket: process.env.FB_PROD_STORAGE_BUCKET,
      messagingSenderId: process.env.FB_PROD_MESSAGING_SENDER_ID,
      appId: process.env.FB_PROD_APP_ID,
      measurementId: process.env.FB_PROD_MEASUREMENT_ID
    }
    break;
  
  default:
    firebaseConfig = {};
    break;

}

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };

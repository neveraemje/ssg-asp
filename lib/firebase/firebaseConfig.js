
import { initializeApp } from "firebase/app";


// const firebaseConfig = {
//   apiKey: "AIzaSyDHzHWkJv3P1zSziNjRYAbc4LscHp-Ky70",
//   authDomain: "asphalt-storage.firebaseapp.com",
//   projectId: "asphalt-storage",
//   storageBucket: "asphalt-storage.appspot.com",
//   messagingSenderId: "964775174995",
//   appId: "1:964775174995:web:84c5b0f43aacfe00f677a6"
// };

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};


const app = initializeApp(firebaseConfig);
export default app;
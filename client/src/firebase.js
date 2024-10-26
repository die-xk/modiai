import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, microsoftProvider, appleProvider };

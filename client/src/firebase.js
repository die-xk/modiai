import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPZQBvWEbGZjvLcuPQHYvRHIEo61SD7S8",
  authDomain: "modi-ai-3beda.firebaseapp.com",
  projectId: "modi-ai-3beda",
  storageBucket: "modi-ai-3beda.appspot.com",
  messagingSenderId: "241058934218",
  appId: "1:241058934218:web:f63ee20c208d901c1eb333"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize providers
const googleProvider = new GoogleAuthProvider();
const microsoftProvider = new OAuthProvider('microsoft.com');
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, microsoftProvider, appleProvider };

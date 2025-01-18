/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "netflixgpt-dad77.firebaseapp.com",
  projectId: "netflixgpt-dad77",
  storageBucket: "netflixgpt-dad77.firebasestorage.app",
  messagingSenderId: "889322538159",
  appId: "1:889322538159:web:1dfe9b379ea5a50571005a",
  measurementId: "G-YP3J835R6Z",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


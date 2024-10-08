// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2c92c.firebaseapp.com",
  projectId: "mern-estate-2c92c",
  storageBucket: "mern-estate-2c92c.appspot.com",
  messagingSenderId: "849498163297",
  appId: "1:849498163297:web:c7d2c1146e41b17bb14220"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
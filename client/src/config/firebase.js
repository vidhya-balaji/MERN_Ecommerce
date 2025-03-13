// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOkeyz_0lEjDyI5W64akWW7w2dP-6AhL8",
  authDomain: "ecommerce-6e374.firebaseapp.com",
  projectId: "ecommerce-6e374",
  storageBucket: "ecommerce-6e374.firebasestorage.app",
  messagingSenderId: "699739176093",
  appId: "1:699739176093:web:e5d8bee3488ba904e2e874",
  measurementId: "G-88M5F2FT92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
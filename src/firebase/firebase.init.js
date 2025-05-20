// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRkFd3wj-wXv4AsaQPcy3ExIPwgEDd7qc",
  authDomain: "coffee-store-edeaa.firebaseapp.com",
  projectId: "coffee-store-edeaa",
  storageBucket: "coffee-store-edeaa.firebasestorage.app",
  messagingSenderId: "375753444952",
  appId: "1:375753444952:web:a8484a5142b9556c2fc42d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
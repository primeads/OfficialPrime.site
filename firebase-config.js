// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRKe_VsukbZ9rCjI6bJLaAAhMrG4JYPHM",
  authDomain: "primeads-83ea6.firebaseapp.com",
  projectId: "primeads-83ea6",
  storageBucket: "primeads-83ea6.firebasestorage.app",
  messagingSenderId: "849050220721",
  appId: "1:849050220721:web:77350f3330c0a00352ca90",
  measurementId: "G-YEMDTDL1EP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

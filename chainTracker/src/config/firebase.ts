// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Corrected import

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg8-NUQ7Zhg9FR3v23Gnm9TbzflmcoQ_s",
  authDomain: "chaintracker-3364c.firebaseapp.com",
  projectId: "chaintracker-3364c",
  storageBucket: "chaintracker-3364c.appspot.com",
  messagingSenderId: "975377469397",
  appId: "1:975377469397:web:bc9b8a5c6851ee0241f75c",
  measurementId: "G-RRGT3SSJML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Correctly initialize the Firebase Auth instance
export const firebaseAuth = getAuth(app); // Corrected code

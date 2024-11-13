// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbtFEdrchQk7kOL1I9ZhWDAJKsu_91mAQ",
  authDomain: "moha-milon-practices-project.firebaseapp.com",
  projectId: "moha-milon-practices-project",
  storageBucket: "moha-milon-practices-project.firebasestorage.app",
  messagingSenderId: "91883255728",
  appId: "1:91883255728:web:2a9b8763b976e2c8c60875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

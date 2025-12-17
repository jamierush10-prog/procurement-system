// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEtXeuaWJRg3PM7vXJZnRuJDfq8ldT1Tc",
  authDomain: "procurement-app-869b8.firebaseapp.com",
  projectId: "procurement-app-869b8",
  storageBucket: "procurement-app-869b8.firebasestorage.app",
  messagingSenderId: "546192883144",
  appId: "1:546192883144:web:2880e96220e96c3ea694fd",
  measurementId: "G-CDXJC4VQ0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
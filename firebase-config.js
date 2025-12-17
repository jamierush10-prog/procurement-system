// 1. IMPORT FROM WEB (CDN) LINKS
// Added: updateDoc, arrayUnion
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, updateDoc, arrayUnion, getDoc, getDocs, query, where, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. YOUR CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyCXetXeuaWJRg3PM7vXJZnRuJDfq8ldT1Tc",
  authDomain: "procurement-app-869b8.firebaseapp.com",
  projectId: "procurement-app-869b8",
  storageBucket: "procurement-app-869b8.appspot.com", 
  messagingSenderId: "546192883144",
  appId: "1:546192883144:web:2880e96220e96c3ea694fd",
  measurementId: "G-CDXJC4VQ0Q"
};

// 3. INITIALIZE FIREBASE & DATABASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 4. EXPORT TOOLS
// Added: updateDoc, arrayUnion
export { db, collection, doc, setDoc, updateDoc, arrayUnion, getDoc, getDocs, query, where, limit };
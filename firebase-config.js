// firebase-config.js
import { initializeApp } from "firebase/app";

// Firestore (what quotes.html needs)
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter,
  where,
} from "firebase/firestore";

// Analytics (optional)
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEtXeuaWJRg3PM7vXJZnRuJDfq8ldT1Tc",
  authDomain: "procurement-app-869b8.firebaseapp.com",
  projectId: "procurement-app-869b8",
  storageBucket: "procurement-app-869b8.firebasestorage.app",
  messagingSenderId: "546192883144",
  appId: "1:546192883144:web:2880e96220e96c3ea694fd",
  measurementId: "G-CDXJC4VQ0Q",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Analytics can fail on file:// or unsupported envs — keep it from breaking your app.
export let analytics = null;
(async () => {
  try {
    if (await isSupported()) analytics = getAnalytics(app);
  } catch {
    analytics = null;
  }
})();

// Re-export helpers so your quotes.html can do:
// import { db, collection, getDocs, query, limit, orderBy, startAfter, where } from './firebase-config.js';
export { collection, getDocs, query, limit, orderBy, startAfter, where };

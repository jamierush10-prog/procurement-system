// firebase-config.js (CDN ESM — works in browser with Live Server)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  limit,
  orderBy,
  startAfter,
  where
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEtXeuaWJRg3PM7vXJZnRuJDfq8ldT1Tc",
  authDomain: "procurement-app-869b8.firebaseapp.com",
  projectId: "procurement-app-869b8",
  storageBucket: "procurement-app-869b8.firebasestorage.app",
  messagingSenderId: "546192883144",
  appId: "1:546192883144:web:2880e96220e96c3ea694fd",
  measurementId: "G-CDXJC4VQ0Q"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Optional analytics (won’t break if unsupported)
export let analytics = null;
(async () => {
  try {
    if (await isSupported()) analytics = getAnalytics(app);
  } catch {
    analytics = null;
  }
})();

// re-export helpers for quotes.html
export { collection, getDocs, query, limit, orderBy, startAfter, where };

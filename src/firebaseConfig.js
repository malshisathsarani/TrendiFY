// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyB8Sn0oIkQy09R3c9xqMzEx_tMsCh6-7QQ",
  authDomain: "product-app-76d85.firebaseapp.com",
  projectId: "product-app-76d85",
  storageBucket: "product-app-76d85.appspot.com",
  messagingSenderId: "595511621361",
  appId: "1:595511621361:web:ef77635123b5a44f125b50",
  measurementId: "G-75ML8EDRRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
const db = getFirestore(app);

export { db };
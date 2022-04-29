// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6arYbYeaYA1U-IF9Q3UTuvADkoUnx-Mo',
  authDomain: 'instagram-clone-1cc8b.firebaseapp.com',
  projectId: 'instagram-clone-1cc8b',
  storageBucket: 'instagram-clone-1cc8b.appspot.com',
  messagingSenderId: '896648667222',
  appId: '1:896648667222:web:f2797fe4bb7fe60a5f1bf7',
  appId: "1:1094841440758:web:c01750a7adf69e20210fd7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };

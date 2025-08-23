'use client';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCeMUlw7fguv1QanQU1ArKB19ED-SfwQQ",
  authDomain: "streetwave-threads.firebaseapp.com",
  projectId: "streetwave-threads",
  storageBucket: "streetwave-threads.firebasestorage.app",
  messagingSenderId: "533288532210",
  appId: "1:533288532210:web:99e89a7b36791fdd8a386b"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "felixyu-net.firebaseapp.com",
  projectId: "felixyu-net",
  storageBucket: "felixyu-net.appspot.com",
  messagingSenderId: "1077004436463",
  appId: "1:1077004436463:web:9f55bf8daf293853332c1a",
  measurementId: "G-5XCLWXMB79",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

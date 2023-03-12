import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxq4b29zBUbZSH_GvyS4xTGd6k7NkCE9U",
  authDomain: "reactdemo-f5d95.firebaseapp.com",

  projectId: "reactdemo-f5d95",
  storageBucket: "reactdemo-f5d95.appspot.com",
  messagingSenderId: "393553162991",
  appId: "1:393553162991:web:0ebc79759a4a66f4dc211a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

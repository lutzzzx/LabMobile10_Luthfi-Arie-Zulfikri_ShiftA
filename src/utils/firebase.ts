// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf1BCvbuNNdSYhX3yXAHodotiGvbkHJMg",
  authDomain: "vue-firebase-6a1e3.firebaseapp.com",
  projectId: "vue-firebase-6a1e3",
  storageBucket: "vue-firebase-6a1e3.firebasestorage.app",
  messagingSenderId: "462049899660",
  appId: "1:462049899660:web:8a16328cb357024c1f77a9",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

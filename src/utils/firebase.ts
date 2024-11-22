// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDujAZUI0vprv4ep5BUY-O-DmHJCidyeH4",
  authDomain: "vue-firebase-788a3.firebaseapp.com",
  projectId: "vue-firebase-788a3",
  storageBucket: "vue-firebase-788a3.firebasestorage.app",
  messagingSenderId: "807086740181",
  appId: "1:807086740181:web:a13725415fe12c8e6b085c"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db  };
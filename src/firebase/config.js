// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT4I-lUMUjMHV3lPTgYhdcpJtGWv6GyMM",
  authDomain: "react-curso-4bf5f.firebaseapp.com",
  projectId: "react-curso-4bf5f",
  storageBucket: "react-curso-4bf5f.appspot.com",
  messagingSenderId: "306364606993",
  appId: "1:306364606993:web:551c75f37e352e76491fb0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
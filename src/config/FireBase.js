// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyBkRGlH-P0eUmrtt2jNFZAE-zgjuAUVOko",
   authDomain: "project1-b9c60.firebaseapp.com",
   projectId: "project1-b9c60",
   storageBucket: "project1-b9c60.firebasestorage.app",
   messagingSenderId: "309585903613",
   appId: "1:309585903613:web:e11c4645fa286e78836394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()

export const db = getFirestore(app)
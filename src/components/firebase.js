// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"



// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUJl_uJi756rv0Yi-sYPcl3z7X3CbqpY8",
  authDomain: "auth-react-ff8e2.firebaseapp.com",
  projectId: "auth-react-ff8e2",
  storageBucket: "auth-react-ff8e2.firebasestorage.app",
  messagingSenderId: "1007021317337",
  appId: "1:1007021317337:web:b12bcff4a4c713f9af32c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 

export default app;

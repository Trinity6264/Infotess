// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbPyybxR7FF8KwJq9aZZQ-xOwoLYnlJH8",
  authDomain: "infotess-5662e.firebaseapp.com",
  projectId: "infotess-5662e",
  storageBucket: "infotess-5662e.appspot.com",
  messagingSenderId: "818391283173",
  appId: "1:818391283173:web:187f3ab8ed213b67baab0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




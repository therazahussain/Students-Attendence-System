// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPBn0BkTJBHEaQ7j1dGpDpV4WB8_vT1dE",
  authDomain: "student-attendance-syste-20769.firebaseapp.com",
  projectId: "student-attendance-syste-20769",
  storageBucket: "student-attendance-syste-20769.appspot.com",
  messagingSenderId: "644959257570",
  appId: "1:644959257570:web:7455bc83f4254747f5efbb",
  measurementId: "G-LZTT27WVC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
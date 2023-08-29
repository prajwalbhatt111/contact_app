// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFireStore} from 'firebase/firestore';
import {firebase} from 'firebase/app'
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6L1_uPVlurekZRQ_VkKCF-xSvLbv3chc",
  authDomain: "contact-app-1547f.firebaseapp.com",
  projectId: "contact-app-1547f",
  storageBucket: "contact-app-1547f.appspot.com",
  messagingSenderId: "560674193749",
  appId: "1:560674193749:web:5065d5a32abefa1387afdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
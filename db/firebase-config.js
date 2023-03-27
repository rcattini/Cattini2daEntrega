// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO2cuDiFuDtCN64CzGnQ3AfdTlncVM_wo",
  authDomain: "er-ecommerce-d7994.firebaseapp.com",
  projectId: "er-ecommerce-d7994",
  storageBucket: "er-ecommerce-d7994.appspot.com",
  messagingSenderId: "159441496837",
  appId: "1:159441496837:web:76feed8b37360d3dc0256c",
  measurementId: "G-QSNSSVNT5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore (app);
export default db
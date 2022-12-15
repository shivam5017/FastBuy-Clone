import firebase from "firebase/app"
import { initializeApp } from "firebase/app";


import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAlGBeR2mjqdcp4rgO8meDHxoqawClVBss",
    authDomain: "fast-buy-d68cf.firebaseapp.com",
    projectId: "fast-buy-d68cf",
    storageBucket: "fast-buy-d68cf.appspot.com",
    messagingSenderId: "462430453411",
    appId: "1:462430453411:web:143977718921987fa7c916",
    measurementId: "G-LDY2PVVVE1"
  };

  const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)
 export default app;
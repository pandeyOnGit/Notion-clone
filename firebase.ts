import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD8YnM29oGiKgZj_yhsZM7yhH2Q60cFGNQ",
    authDomain: "notion-clone-fe90e.firebaseapp.com",
    projectId: "notion-clone-fe90e",
    storageBucket: "notion-clone-fe90e.firebasestorage.app",
    messagingSenderId: "245850040525",
    appId: "1:245850040525:web:c315487803752f1564a184"
  };

  const app= getApps().length===0?initializeApp(firebaseConfig):getApp();
  const db = getFirestore(app);

  export {db}
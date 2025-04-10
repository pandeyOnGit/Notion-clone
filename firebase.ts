import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    put your config data
  };

  const app= getApps().length===0?initializeApp(firebaseConfig):getApp();
  const db = getFirestore(app);

  export {db}

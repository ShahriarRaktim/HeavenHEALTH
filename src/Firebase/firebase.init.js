import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/firebase.config"

const firebaseInitializeApp = () =>{
    initializeApp(firebaseConfig);
}

export default firebaseInitializeApp;
import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import firebaseInitializeApp from "../Firebase/firebase.init";

firebaseInitializeApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const register=(email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("register", user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error kele", errorMessage)
      // ..
    });
  };

  const logIn =(email, password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }



  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } 
      else {
        setUser({})
      }
    });
    return ()=> unsubscriber;
  }, []);

  return{
      googleSignIn,
      logOut,
      register,
      logIn,
      user
  }
};

export default useFirebase;

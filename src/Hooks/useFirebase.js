import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseInitializeApp from "../Firebase/firebase.init";

firebaseInitializeApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
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
      user
  }
};

export default useFirebase;

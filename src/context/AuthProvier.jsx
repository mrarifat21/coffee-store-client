import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
const AuthProvier = ({ children }) => {

  //  create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  sign in user
  const signinUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }


  const removeUser =(auth)=>{
    return deleteUser(auth.currentUser)
  }

  
  const userInfo = {
    createUser,
    signinUser,
    removeUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvier;

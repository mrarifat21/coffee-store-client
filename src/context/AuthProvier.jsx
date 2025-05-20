import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const AuthProvier = ({ children }) => {

  //  create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  sign in user
  const signinUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }


  // const deleteUser =()=>{
  //   const (user){
  //     return 
  //   }
  // }

  
  const userInfo = {
    createUser,
    signinUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvier;

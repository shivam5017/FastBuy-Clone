import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "firebase/auth"
import { auth } from "../firebase-config";
const userAuthContext=createContext();


export function UserAuthContextProvider({children}){
  
   const [user,setUser]=useState("");

     function signUp(email,password,username){
        return createUserWithEmailAndPassword(auth,email,password,username)
     }

     function logIn(email,password,username){
        return signInWithEmailAndPassword(auth,email,password,username)
     }
     
     useEffect(()=>{
         const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
               setUser(currentUser)
           })
           return  ()=>{
            unsubscribe()
           }
     },[])

    return (
        <userAuthContext.Provider value={{user,signUp,logIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}
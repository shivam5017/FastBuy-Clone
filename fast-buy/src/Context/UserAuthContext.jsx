import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile} from "firebase/auth"
import { auth } from "../firebase-config";
const userAuthContext=createContext();


export function UserAuthContextProvider({children}){
  
   const [user,setUser]=useState("");

    async function signUp(email,password,username){
         await createUserWithEmailAndPassword(auth,email,password,username).then((res)=>{
            const user=res.user;
            updateProfile(user,{
                displayName:username,
            })
            console.log(res.user)
         }).catch((err)=>console.log(err))
        
     }

     function logIn(email,password,username){
        return signInWithEmailAndPassword(auth,email,password,username)
     }

     function logout(){
        return signOut(auth);
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
        <userAuthContext.Provider value={{user,signUp,logIn,logout}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}
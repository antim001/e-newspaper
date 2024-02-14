import { createContext, useState, useEffect } from 'react';
import { getAuth ,signOut} from "firebase/auth";
import app from './../firebase/firebase-config';
import {  createUserWithEmailAndPassword,onAuthStateChanged , signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(app);
export const AuthContext=createContext(null)
 const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
      setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
      
    }
    const signIn=(email,password)=>{
      setLoading(true)
     return  signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
      setLoading(true)
       signOut(auth)
    }
    useEffect(()=>{
      const unSubscribe =onAuthStateChanged(auth,currentUser=>{
              console.log('currentUser in auth change',currentUser);
              setUser(currentUser)
              setLoading(false)
      });
      return ()=>{
         unSubscribe(auth);
      }
    },[])
    const authInfo={
             user,
             loading,
             createUser,
             signIn,
             logOut
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
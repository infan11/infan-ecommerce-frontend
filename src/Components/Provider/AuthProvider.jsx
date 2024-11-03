import { createContext, useEffect, useState } from "react";

import {app}  from '../Firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = (email, password) => {
        setLoading(true);
        return signOut(auth)
    }
    const googleUserProvider = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
 const updateUserProfile = (name , photo) => {
    return updateProfile(auth.currentUser , {
        displayName : name , photoURL: photo
    })
 }
    useEffect(() => {
      const unSubscribe =   onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current user" , currentUser);
            setLoading(false)
        })
        return () =>  unSubscribe();
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signOut,
        login,
        logout,
        updateUserProfile,
        googleUserProvider,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { createContext, useEffect, useState } from "react";

import { app } from '../Firebase/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

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
    const updateUserProfile = ({ displayName, photoURL }) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // // console.log("Current user", currentUser);
            if (currentUser) {
                // get item otoba
                 const userInfo = {email : currentUser.email}
                 axiosPublic.post("/jwt",  userInfo)
                 .then(res => {
                    // // console.log(res.data);
                    if(res.data.token){
                        localStorage.setItem("access-token" , res.data.token);
                        setLoading(false)

                    }
                   
                 })
                 
            }
            else {
                localStorage.removeItem("access-token")
                setLoading(false)
            }
          
        })
        return () => unSubscribe();
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
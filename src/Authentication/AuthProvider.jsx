import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import axios from "axios";
let auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    let axiosSecure = UseAxiosSecure();
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);
    let googleAuthProvider = new GoogleAuthProvider();
    let signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    let updateUserProfile = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    let continueWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    let logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    let getToken = async (email) => {
        let { data } = await axiosSecure.post(`/jwt`, { email })
        console.log(data)
    }

    let saveUser = async (user) => {
        const userData = {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
            isAdmin: false
        };
        let { data } = await axiosSecure.post('/user', userData);
        console.log(data);

    }

    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            if (currentUser) {
                saveUser(currentUser);
                getToken(currentUser.email)
            }
            setLoading(false);
        })

        return () => unSubscribe();
    }, [])
    console.log(loading)
    let userInfo = {
        user,
        signIn,
        signUp,
        updateUserProfile,
        logout,
        loading,
        setLoading,
        continueWithGoogle
    };
    return (
        <AuthContext.Provider value={userInfo} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;
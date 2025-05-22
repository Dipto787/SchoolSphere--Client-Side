import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
let auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(false);
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


    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();
    }, [])

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
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState("");

    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserInfo = (updatedProfile) => {
        return updateProfile(auth.currentUser, updatedProfile);
    };

    const logOutUser = () => {
        signOut(auth);
        return;
    };

    const passwordResetEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    const authInfo = {
        user,
        setUser,
        loading,
        email,
        setEmail,
        registerUser,
        updateUserInfo,
        loginWithGoogle,
        loginWithEmailPassword,
        logOutUser,
        passwordResetEmail
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
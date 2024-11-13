import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Layout/firebase.init';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const name = 'Ahasan Habib'

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe(); //observation stop or clean which called unmount.
        }
    }, []);

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
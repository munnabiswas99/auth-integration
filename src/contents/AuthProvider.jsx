import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const userInfo = {
        user,
        createUser,
        signUp,
        signOutUser
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if(currentUser){
    //         console.log('has current user', currentUser);
    //     }
    //     else{
    //         console.log('current user', currentUser)
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside useEffect', currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    })

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
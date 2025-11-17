import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUp = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        createUser,
        signUp
    }

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            console.log('has current user', currentUser);
        }
        else{
            console.log('current user', currentUser)
        }
    })

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
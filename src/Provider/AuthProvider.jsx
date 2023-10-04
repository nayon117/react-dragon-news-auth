import PropTypes from 'prop-types';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
 
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // google signIn 
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }
   
    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign In user 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user 
    const logOut = () => {
        setLoading(true)
        return signOut (auth)
    }
    
    // observer 
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoading(false)
       })
        return () => {
            unSubscribe()
        }
    },[])


    const authInfo = {
        googleLogin,
        createUser,
        logIn,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
};

export default AuthProvider;

 
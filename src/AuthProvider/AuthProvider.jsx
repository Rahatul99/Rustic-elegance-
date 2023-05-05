import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase-config/Firebase-config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const updateUser = (name, image) => {
        setLoading(true);
        return updateProfile(auth.currentUser,{displayName: `${name}`, photoURL: `${image}`})
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const gitHubLogIn = (provider) => {
        return signInWithPopup( auth, provider );
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogin,
        gitHubLogIn,
        logOut,
        loading,
        updateUser
    }

    return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;
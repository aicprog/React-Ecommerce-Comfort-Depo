import React, { useContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

const AuthContext = React.createContext();

export const FirebaseAuthProvider = ({children}) => {

	const [currentUser, setCurrentUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [waiting, setWaiting] = useState(true);	

	const checkUserAuth = () => {
		return auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				setLoggedIn(true);
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({ id: snapshot.id, ...snapshot.data() });
				});
			} else {
				setCurrentUser(null);
				setLoggedIn(false);
				setWaiting(false);
				localStorage.setItem("userLoggedIn", false);
			}
		});
	};

	  useEffect(() => {
		checkUserAuth();

		//if we get a value back for loggedIn, then we want to setWaiting to false so rest of components know we are no longer waiting for a value of loggedIn to come back.
		if(loggedIn){
			setWaiting(false)
		}
	}, [loggedIn]);



	const signInUser = async (email, password) => {
			try {
				await auth.signInWithEmailAndPassword(email, password).then(() => {
					window.location.href = "/";
				});
				console.log("success");
				localStorage.setItem("userLoggedIn", true);
			} catch (error) {
				console.log(error);
			}
	};


	const signOut = () => {
		auth.signOut().then(() => {
			window.location.href = "/login";
		});
		localStorage.setItem("userLoggedIn", false);
		setLoggedIn(false);
		//setWaiting(false);
		//unsubscribeFromAuth();
	};


    return (
			<AuthContext.Provider
				value={{ currentUser, loggedIn, signOut, signInUser, waiting }}>
				{children}
			</AuthContext.Provider>
		);
}

export const useFirebaseAuthProvider = () => {
	return useContext(AuthContext);
};



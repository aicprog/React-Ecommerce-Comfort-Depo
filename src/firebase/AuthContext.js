import React, { useContext, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

const AuthContext = React.createContext();

export const FirebaseAuthProvider = ({children}) => {

	const [currentUser, setCurrentUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	//const [waiting, setWaiting] = useState(true);	
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false )

	const checkUserAuth = () => {
		return auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				setLoggedIn(true);
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({ id: snapshot.id, ...snapshot.data() });
					setIsLoading(false);
				});
			} else {
				setCurrentUser(null);
				setLoggedIn(false);
				//setWaiting(false);
				localStorage.setItem("userLoggedIn", false);
				setIsLoading(false);
				
			}
			
		});
	};

	  useEffect(() => {
		checkUserAuth();
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
				setError(true)
			}
	};


	const signOut = () => {
		auth.signOut().then(() => {
			window.location.href = "/login";
		});
		localStorage.setItem("userLoggedIn", false);
		setLoggedIn(false);
		setIsLoading(false)
		//setWaiting(false);
		//unsubscribeFromAuth();
	};


    return (
			<AuthContext.Provider
				value={{
					currentUser,
					loggedIn,
					signOut,
					signInUser,
					isLoading,
					error,
				}}
			>
				{children}
			</AuthContext.Provider>
		);
}

export const useFirebaseAuthProvider = () => {
	return useContext(AuthContext);
};



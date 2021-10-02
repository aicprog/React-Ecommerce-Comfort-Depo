import React, { useContext, useEffect, useState } from 'react'
import { useFirebaseAuthProvider } from "../firebase/AuthContext";


const UserContext = React.createContext()


export const UserProvider = ({ children }) => {
	const { currentUser, loggedIn, signInUser, signOut, waiting } = useFirebaseAuthProvider();


  

  return (
		<UserContext.Provider
			value={{ currentUser, signOut, loggedIn, signInUser, waiting }}
		>
			{children}
		</UserContext.Provider>
	);
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}

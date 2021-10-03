import React, { useContext, useEffect, useState } from 'react'
import { useFirebaseAuthProvider } from "../firebase/AuthContext";


const UserContext = React.createContext()


export const UserProvider = ({ children }) => {
	const { currentUser, signInUser, signOut, loggedIn } = useFirebaseAuthProvider();

	const [myUser, setMyUser] = useState(null)
	

	useEffect(() => {
		setMyUser(currentUser);
	}, [currentUser]);

  return (
		<UserContext.Provider
			value={{ currentUser, signOut, signInUser, myUser, loggedIn }}
		>
			{children}
		</UserContext.Provider>
	);
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}


import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useFirebaseAuthProvider } from '../firebase/AuthContext';
//import { useAuth0 } from '@auth0/auth0-react';
// will remove later

	// return (
	// 	<Route
	// 		{...rest}
	// 		render={(props) =>
	// 			loggedIn ? (
	// 				<Component {...props} />
	// 			) : waiting ? (
	// 			 	""
	// 			 ) : (
	// 				<Redirect to={redirectTo} />
	// 			)
	// 		}
	// 	></Route>
	// );


const PrivateRoute = ({ children, redirectTo, currentUser, ...rest }) => {
	console.log("LOGGED IN PRIVATE ROUTE", currentUser)
	return (
		<Route
			{...rest}
			render={() => {
				return currentUser ? children : <Redirect to={redirectTo}></Redirect>;
			}}
		></Route>
	);
};
export default PrivateRoute;

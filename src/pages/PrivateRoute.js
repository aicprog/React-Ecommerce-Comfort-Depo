import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { useAuth0 } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';



const PrivateRoute = ({
	component: Component,
	loggedIn,
	waiting,
	redirectTo,
	...rest
}) => {
	//const { currentUser, wasInitialized } = useUserContext();
	console.log(waiting)
	return (
		<Route
			{...rest}
			render={(props) =>
				loggedIn ? (
					<Component {...props} />
				) : waiting ? (
				 	""
				 ) : (
					<Redirect to={redirectTo} />
				)
			}
		></Route>
	);
};


export default PrivateRoute;

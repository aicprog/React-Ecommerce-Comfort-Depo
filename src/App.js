import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {useUserContext } from './context/user_context';
import {About, Auth, Cart, Checkout, Home, Error, Private, Products,
	SingleProduct,
} from "./pages";
import LoginSignUp from './pages/LoginSignup';
import PrivateRoute from './pages/PrivateRoute';



function App() {
	// console.log(UserProvider.UserProvider.currentUser)

	const {loggedIn, waiting} = useUserContext();
				// <Route exact path="/login">
				// 	{!loggedIn ? <LoginSignUp /> : <Redirect push to="/" />}
				// </Route>;


	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Switch>
				<Route exact path="/login">
					{!loggedIn ? <LoginSignUp /> : <Redirect push to="/" />}
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/auth">
					<Auth />
				</Route>
				<Route exact path="/cart">
					<Cart />
				</Route>
				<PrivateRoute
					exact
					path="/checkout"
					loggedIn={loggedIn}
					waiting={waiting}
					component={Checkout}
					redirectTo="/login"
				/>
				<Route exact path="/products">
					<Products />
				</Route>
				<Route exact path="/products/:id" children={<SingleProduct />} />
				<Route path="*">
					<Error />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App

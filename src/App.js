import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {useUserContext } from './context/user_context';
import { useFirebaseAuthProvider } from './firebase/AuthContext';
import {About, Auth, Cart, Checkout, Home, Error, PrivateRoute, Products,
	SingleProduct, AuthWrapper, LoginSignUp
} from "./pages";





function App() {

	const { loggedIn } = useUserContext();


	return (
		<AuthWrapper>
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
						currentUser={loggedIn}
						redirectTo="/"
					>
						<Checkout />
					</PrivateRoute>
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
		</AuthWrapper>
	);
}

export default App

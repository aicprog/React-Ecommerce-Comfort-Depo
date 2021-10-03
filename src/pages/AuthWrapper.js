import React from 'react'
//import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import { COUNT_CART_TOTALS } from '../actions'
import { Loading } from '../components'
import { useFirebaseAuthProvider } from '../firebase/AuthContext'


const AuthWrapper = ({ children }) => {
	const { isLoading, error} = useFirebaseAuthProvider();


	if (isLoading) {
		return (
			<Wrapper>
				<Loading />
			</Wrapper>
		);
	}

	// if (error) {
	// 	console.log(error)
	// 	return (
	// 		<Wrapper>
	// 			<h1>{error.message}</h1>
	// 		</Wrapper>
	// 	);
	// }

	return <div>{children}</div>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper

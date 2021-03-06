import React from "react";
import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";



const LoginSignUp = () => {


	return (
		<Wrapper>
			<SignIn className="sign-in" />
			<SignUp className="sign-in" />
		</Wrapper>
	);
};

export default LoginSignUp;

const Wrapper = styled.div`
	display: flex;
	width: 950px;
	justify-content: space-between;
	margin: 30px auto;
	height: 100vh;

	@media (max-width: 976px) {
		padding: 2rem 0rem;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		height: auto;

	}

	.sign-in {
		padding-bottom: 3rem;
	}

`;

const ContentWrapper = styled.div`
	text-align: center;
	height: 90vh;
`;


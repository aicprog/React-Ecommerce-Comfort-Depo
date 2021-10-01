import React from "react";
import styled from "styled-components";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const LoginSignUp = () => {
	return (
		<Wrapper className="page-100">
			<SignIn />
			<SignUp />
		</Wrapper>
	);
};

export default LoginSignUp;

const Wrapper = styled.div`
	display: flex;
	width: 950px;
	justify-content: space-between;
	margin: 30px auto;
	padding: 6rem 0rem;

	@media (max-width: 976px) {
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 100vh;
		width: 100vw;
		
	}

    
`;


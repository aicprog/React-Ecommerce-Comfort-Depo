import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";

import { auth, signInWithgoogle } from "../firebase/firebase.utils";

const SignIn = () => {

    const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	const {signInUser, error} = useUserContext()
	//clears out
	const handleSubmit = (e) => {
		e.preventDefault();
		signInUser(email, password);
		setEmail("");
		setPassword("");
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		if(name === "email"){
			setEmail(value)
		}else if(name ==="password"){
			setPassword(value)
		}
		
	};


    return (
			<Wrapper>
				<div className="sign-in">
					<h2 className="title">I already have an account</h2>
					{error && <p className="error">There was an error with your email and/or password.</p>}

					<span>Sign in with your email and password.</span>

					<form onSubmit={handleSubmit} className="form">
						<input
							name="email"
							value={email}
							onChange={handleChange}
							label="email"
							required
							className="form-input"
							placeholder="email"
						/>

						<input
							name="password"
							type="password"
							value={password}
							onChange={handleChange}
							label="password"
							required
							className="form-input"
							placeholder="password"
						/>

						<div className="button">
							<button type="submit" className="btn">
								Submit
							</button>
							<button onClick={signInWithgoogle} className="link-btn clear-btn">
								Sign in with Google
							</button>
						</div>
					</form>
				</div>
			</Wrapper>
		);
}

export default SignIn







const Wrapper = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	.error{
		color: red
	}

	.title {
		margin: 10px 0;
		padding-bottom:  1rem;
	}

	.button {
		display: flex;
		justify-content: space-between;
		margin-top: 1rem;
	}

	.link-btn {
		background: transparent;
		border-color: transparent;
		text-transform: capitalize;
		padding: 0.25rem 0.5rem;
		background: var(--clr-primary-5);
		color: var(--clr-white);
		border-radius: var(--radius);
		letter-spacing: var(--spacing);
		font-weight: 400;
		cursor: pointer;
		
	}
	.clear-btn {
		background: var(--clr-black);
	}

	.form{
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 200px


	}


	.form-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.form-input::placeholder {
		text-transform: capitalize;
	}
`;
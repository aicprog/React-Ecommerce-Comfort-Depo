import React from "react";
import styled from "styled-components";

import { auth, signInWithgoogle } from "../firebase/firebase.utils";



const SignIn = () => {

    const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	//clears out
	const handleSubmit = async (event) => {
		event.preventDefault();



		try {
			await auth.signInWithEmailAndPassword(email, password);
            setEmail("")
            setPassword("")
		} catch (error) {
			console.log(error);
		}

		    setEmail("")
            setPassword("")
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
        console.log(value, name)
		//this.setState({ [name]: value });
	};

    return (
			<Wrapper>
				<div className="sign-in">
					<h2 className="title">I already have an account</h2>
					<span>Sign in with your email and password.</span>

					<form onSubmit={handleSubmit} className="form">
						<input
							name="email"
							value={email}
							handleChange={handleChange}
							label="email"
							required
							className="form-input"
							placeholder="email"
						/>

						<input
							name="password"
							type="password"
							value={password}
							handleChange={handleChange}
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
		height: 70%;
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
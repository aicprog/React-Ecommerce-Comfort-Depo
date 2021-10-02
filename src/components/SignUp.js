import React from 'react'
import {auth, createUserProfileDocument} from '../firebase/firebase.utils'
import styled from 'styled-components'

const SignUp = () => {
    const [displayName, setDisplayName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

        const handleSubmit = async event => {
			event.preventDefault();

			if (password !== confirmPassword) {
				alert("passwords don't match");
				return;
			}

			try {
				const { user } = await auth.createUserWithEmailAndPassword(
					email,
					password
				);

				await createUserProfileDocument(user, { displayName });
			} catch (error) {
				console.error(error);
			}

			//reset form
			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		};

    const handleChange = event =>{
        const{name, value} = event.target;
        switch (name) {
			case "displayName":
				setDisplayName(value)
			break;
			case "email":
				setEmail(value)
			break;
			case "password":
				setPassword(value)
			break;
			case "confirmPassword":
				setConfirmPassword(value)
			break;

			default:
				break;
		}
    }

    
    return (
			<Wrapper>
				<div className="sign-up">
					<h2 className="title">I do not have an account</h2>
					<span>Sign up with your email and password</span>
					<form className="form" onSubmit={handleSubmit}>
						<input
							type="text"
							name="displayName"
							value={displayName}
							onChange={handleChange}
							label="Display Name"
							className="form-input"
							placeholder="display name"
							required
						/>

						<input
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							label="Email"
							className="form-input"
							placeholder="confirm email"
							required
						/>

						<input
							type="password"
							name="password"
							value={password}
							onChange={handleChange}
							label="Password"
							className="form-input"
							placeholder="password"
							required
						/>

						<input
							type="password"
							name="confirmPassword"
							value={confirmPassword}
							onChange={handleChange}
							label="confirmPassword"
							className="form-input"
							placeholder="confirm password"
							required
						/>

						<button type="submit" className="btn">
							Sign Up
						</button>
					</form>
				</div>
			</Wrapper>
		);
}

export default SignUp


const Wrapper = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	.title {
		margin: 10px 0;
		padding-bottom: 1rem;
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

	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 260px;
		margin-top: 1rem;

		button {
			margin-top: 1rem;
		}
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
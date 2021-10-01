import React from 'react'
import {auth, createUserProfileDocument} from '../firebase/firebase.utils'
import styled from 'styled-components'

const SignUp = () => {
    const [displayName, setDisplayName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")

        const handleSubmit = async event => {
            event.preventDefault()

            if(password !== confirmPassword){
                alert("passwords don't match")
                return;
        }

        try{    
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

                await createUserProfileDocument(user, {displayName})
                //reset form
                this.setState({
                    displayName:'',
                    email:'', 
                    password:'',
                    confirmPassword: ''
                })
        }catch(error){
            console.error(error)
        }
    };

    const handleChange = event =>{
        const{name, value} = event.target;
        this.setState({[name]: value});
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
							placeholder="email"
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
	display: flex;
	flex-direction: column;
	width: 380px;


	.title {
		margin: 10px 0;
		padding-bottom: 1rem;
	}

	button {
		margin-top: 2rem;
	}

	.form {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		height: 90%;
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

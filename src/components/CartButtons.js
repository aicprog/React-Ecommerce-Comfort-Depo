import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  return (
		<Wrapper className="cart-btn-wrapper">
			<Link to="/cart" className="cart-btn">
				<span className="cart-container">
					<FaShoppingCart />
					<span className="cart-value">12</span>
				</span>
				<span className="cart-name">Cart</span>
			</Link>

			<button type="button" className="auth-btn">
				<FaUserPlus />
				<span className="cart-name">Login</span>
			</button>
		</Wrapper>
	);}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	width: 225px;

	.cart-btn {
		color: var(--clr-grey-1);
		font-size: 1.5rem;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-1);
		display: flex;
		align-items: center;
	}

	.cart-name {
		font-size: 1.1rem;
		padding-top: 0.5rem;
	}

	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		margin-right: 1rem;

		svg {
			height: 1.6rem;
			margin-left: 5px;
		}
	}
	.cart-value {
		position: absolute;
		top: -10px;
		right: -16px;
		background: var(--clr-primary-5);
		width: 16px;
		height: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.75rem;
		color: var(--clr-white);
		padding: 12px;
	}
	.auth-btn {
		display: flex;
		align-items: center;
		background: transparent;
		border-color: transparent;
		font-size: 1.5rem;
		cursor: pointer;
		color: var(--clr-grey-1);
		letter-spacing: var(--spacing);
    margin-left: 1rem;

		svg {

			margin-right: 0.5rem;
		}
	}
`;
export default CartButtons

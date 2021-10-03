import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import logo from "../assets/logo-icon.png";
import { formatPrice } from '../utils/helpers';




const StripeButton = ({price}) => {
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY
    
    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    return (
			<StripeCheckout
				label="Proceed To Checkout"
				name="Comfort Depo"
				billingAddress
				shippingAddress
				image={logo}
				description={`Your total is ${formatPrice(price)}`}
				panelLabel="Pay Now"
				token={onToken}
				stripeKey={publishableKey}
			>
				<button className="btn">Checkout</button>
			</StripeCheckout>
		);
}

export default StripeButton

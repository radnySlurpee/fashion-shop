import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price, currentUser }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_noqz13hPgB7ae7wRCoFzw6fe00uRUXCjls';

    const onToken = token => {
        console.log(token);
        console.log(currentUser.email);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Fashion Shop'
            email={currentUser}
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/HvN.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
    
};

export default StripeCheckoutButton;
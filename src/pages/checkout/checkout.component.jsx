import React from 'react';
import './checkout.styles.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe.component';

const CheckoutPage = ({ cartItems, total, currentUser }) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className="total">
            <span>TOTAL: ${total} </span>
        </div>
        {
            currentUser ?
                cartItems.length > 0 ?
                    (<StripeCheckoutButton price={total} currentUser={currentUser.email}/>)
                    : 
                    (<div className="testcode"> No items selected</div>)
            :
                (<div className="testcode"> Please Login </div>)
        }
        <div className="testcode"> Please use this credit card for testing on payments <br/> 4242 4242 4242 4242 - Exp:02/20 - CVC:123 </div>

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    currentUser: selectCurrentUser,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
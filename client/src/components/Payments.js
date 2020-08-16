import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'

import StripLogo from './StripLogo.JPG'

class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                amount={500}
                token={(token) => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name={'Hey Trucker'}
                description={'Yes, I would like a monthly subscription to job boards.'}
                // label={'test'}
                panelLabel={'Subscribe'}
                image={StripLogo}
                // Note: enabling both zipCode checks and billing or shipping address will
                // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                // billingAddress={true}
                // zipCode={true}
                allowRememberMe={false}

            >
                <button className="btn">
                    test
                </button>
            </StripeCheckout>
        );
    }
}


export default connect(null, actions)(Payments);
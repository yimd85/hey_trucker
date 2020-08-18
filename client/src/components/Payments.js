import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Button from '@material-ui/core/Button';

import StripLogo from './StripLogo.JPG'

class Payments extends Component {

    render() {
        return (
            <StripeCheckout
                token={(token) => {
                    this.props.handleToken(token);
                    this.props.addDrivers(this.props.driverInfo);
                }}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                name={'Hey Trucker'}
                description={'Yes, I would like a monthly subscription to job boards.'}
                // label={'test'}
                panelLabel={'Confirm'}
                image={StripLogo}
                // Note: enabling both zipCode checks and billing or shipping address will
                // cause zipCheck to be pulled from billing address (set to shipping if none provided).
                // billingAddress={true}
                // zipCode={true}
                allowRememberMe={false}
            >
                <Button style={{ marginTop: '20px', width: "100%", height: '50px' }} variant="contained" color="primary" href="#contained-buttons">
                    <div className={'gilroy-regular'}>Subscribe</div>
                </Button>
            </StripeCheckout>
        );
    }
}


export default connect(null, actions)(Payments);
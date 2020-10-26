
import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Payments from './Payments';
import * as actions from '../actions'
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import moment from 'moment';

class Profile extends React.Component {
    state = { confirmation: false }


    render() {
        const { notification } = this.props.auth;
        let subscriptionStatus = null;
        const { auth, stripeInfo } = this.props.auth;
        let membershipRenewalDate = 0;
        let customerBrand = '';
        let last4 = 0;
        if (auth) {
            subscriptionStatus = auth.subscriptionId;
        }


        if (stripeInfo) {
            membershipRenewalDate = stripeInfo.subscriptionEnd * 1000;
            customerBrand = stripeInfo.customerBrand;
            last4 = stripeInfo.last4
        }

        console.log(membershipRenewalDate)
        return (
            <div >
                <h1 style={{ textAlign: 'center', }} className={'gilroy-regular'}>Account</h1>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>



                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: '10px 20px',
                        width: '500px',
                        height: '100px'
                    }}>
                        <div style={{ padding: '5px', border: '1px solid black' }}>
                            <div className={'gilroy-regular'} >{'Membership & Billing'}</div>
                            {subscriptionStatus === null ?
                                null
                                :
                                subscriptionStatus
                                    ?
                                    <a href="#0" className={'gilroy-regular'} onClick={() => this.setState({ confirmation: true })}>Cancel Membership</a>
                                    :
                                    <a href="#0" className={'gilroy-regular'} onClick={() => this.setState({ confirmation: true })}>Renew Membership</a>
                            }
                            <div />
                            {
                                membershipRenewalDate
                                    ?
                                    <div style={{ marginTop: '10px' }} className={'gilroy-regular'} >{`Your next billing date is ${moment(membershipRenewalDate).format('L')}`}</div>
                                    :
                                    null
                            }
                        </div>
                        <div style={{ padding: '5px', border: '1px solid black' }}>
                            <Link className={'gilroy-regular'} to={'/driverupdate'} > Update Profile Information</Link>
                            <div style={{ marginTop: '10px' }}>

                                <Payments updatePayment />
                            </div>

                            {
                                customerBrand && last4
                                    ?
                                    <div style={{ marginTop: '10px' }} className={'gilroy-regular'} >{`${customerBrand} ending in ${last4}`}</div>
                                    :
                                    null
                            }
                        </div>


                    </div>
                </div>

                {notification ? <div style={{ marginTop: '10px', textAlign: 'center', }} >Account updated</div> : null}

                <Dialog open={this.state.confirmation || false} >
                    <DialogContent  >

                        <div className={'gilroy-regular'} >
                            {subscriptionStatus ? 'Are you use you want to remove membership?' : 'Are you use you want to revew membership for $10 a month starting today? '}
                        </div>
                    </DialogContent>
                    <DialogActions style={{ textAlign: "center", display: 'block' }}>
                        <Button
                            onClick={() => { this.setState({ confirmation: false }) }}
                            color="primary"
                            style={{ backgroundColor: 'grey', color: '#fff', width: '100px' }}
                        >
                            <div className={'gilroy-regular'}>No </div>
                            <i className="material-icons" style={{ marginLeft: '10px' }}>
                                highlight_off
                             </i>
                        </Button>
                        <Button onClick={() => {
                            subscriptionStatus ? this.props.cancelMemberShip() : this.props.renewMembership(); 
                            this.setState({ confirmation: false });

                        }} color="primary" style={{ backgroundColor: '#16a8a6', color: '#fff', width: '100px' }}  >
                            <div className={'gilroy-regular'}>Yes </div>
                            <i className="material-icons" style={{ marginLeft: '10px' }}>
                                check_circle
                             </i>
                        </Button>
                    </DialogActions>
                </Dialog >
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}


export default connect(mapStateToProps, actions)(Profile);
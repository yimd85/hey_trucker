import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Payments from './Payments';
import * as actions from '../actions'
import Logo from './Logo-Light.png'

class Header extends Component {
    state = { open: false }

    renderLoginOrLogOut() {
        switch (this.props.auth) {
            case null:
                return null;
            case false: //if not signed in
                return (
                    <li >
                        <a
                            style={{ fontSize: '28px' }}
                            href="/auth/google"
                        >
                            {'Log In'}
                        </a>
                    </li>
                );
            default: //if not signed in
                return (
                    <li >
                        <a
                            style={{ fontSize: '28px' }}
                            href="/api/logout"
                        >
                            {'Log Out'}
                        </a>
                    </li>
                );
        }
    }

    renderProfileJobBoardsOrJoinNow() {
        let subscriptionStatus = null;
        if (this.props.auth) {
            subscriptionStatus = this.props.auth.subscription;
        }
        switch (subscriptionStatus) {
            case null:
                return null;
            case false: //if not subscribed
                return <li><a style={{ fontSize: '28px' }} href="/join">{'Join Now'}</a></li>;
            default: //if not signed in
                return (
                    <>
                        <li><a style={{ fontSize: '28px' }} href="/profile">{'Profile'}</a></li>
                        <li><a style={{ fontSize: '28px' }} href="/jobs">{'Job Board'}</a></li >
                    </>
                );
        }
    }

    menuButtonrenderLoginOrLogOut() {
        switch (this.props.auth) {
            case null:
                return null;
            case false: //if not signed in
                return (
                    <div >
                        <Link
                            style={{ color: 'white' }}
                            onClick={() => this.setState({ open: false })}
                            to={'/login'}
                        >
                            <h5>{"Log In"}</h5>
                        </Link>
                    </div>
                );
            default: //if signed in
                return (
                    <div>
                        <a
                            href="/api/logout"
                            style={{ textDecoration: 'none', color: 'white' }}
                            onClick={() => this.setState({ open: false })}
                        >
                            <h5 >{"Log Out"}</h5>
                        </a>


                    </div>
                );
        }
    }

    menuButtonrRenderProfileJobBoardsOrJoinNow() {
        let subscriptionStatus = null;
        if (this.props.auth) {
            subscriptionStatus = this.props.auth.subscription;
        }
        switch (subscriptionStatus) {
            case null:
                return null;
            case false: //if not subscribed
                return <div className={'regular'}>
                    <Link
                        style={{ color: 'white' }}
                        onClick={() => this.setState({ open: false })}
                        to={'/surveys'}
                    >
                        <h5>{"Join Now"}</h5>
                    </Link>
                </div>;
            default: //if not signed in
                return (
                    <>
                        <div className={'regular'}>
                            <Link
                                style={{ color: 'white' }}
                                onClick={() => this.setState({ open: false })}
                                to={'/surveys'}
                            >
                                <h5>{"Job Board"}</h5>
                            </Link>
                        </div>
                        <div className={'regular'}>
                            <Link
                                style={{ color: 'white' }}
                                onClick={() => this.setState({ open: false })}
                                to={'/surveys'}

                            >
                                <h5>{"Profile"}</h5>
                            </Link>
                        </div>
                    </>
                );
        }
    }

    render() {
        return (
            <div>
                <nav style={{ backgroundColor: '#473ff6', height: '84px' }} >
                    <div style={{ padding: '10px 30px' }} className="nav-wrapper">
                        <Link
                            to={"/"}
                            className="brand-logo"
                        >
                            <img
                                className="right-header"
                                height='60'
                                src={Logo}
                                alt={'hey-trucker-logo'}
                            />
                        </Link>
                        <a
                            // href='!#'
                            onClick={() => this.setState({ open: true })}
                            data-target="mobile-demo"
                            className="sidenav-trigger"
                            style={{ marginTop: '4px', display: 'flex', alignContent: 'center', justifyContent: 'center' }}
                        >
                            <i className="material-icons">{"menu"}</i>
                        </a>

                        <ul style={{ fontSize: '28px' }} className="right hide-on-med-and-down regular">

                            <li><a style={{ fontSize: '28px' }} href="/login">{'Login'}</a></li>
                            <li><a style={{ fontSize: '28px' }} href="/">{'Home'}</a></li>
                            {this.renderProfileJobBoardsOrJoinNow()}
                            {this.renderLoginOrLogOut()}
                            {/* <li>
                                <Payments />
                                <button onClick={() => this.props.getDrivers()}  >
                                    {' testing adding drivers'}
                                </button>

                            </li> */}
                        </ul>
                    </div>
                </nav>

                <Dialog
                    open={this.state.open || false}
                >
                    <DialogTitle style={{ backgroundColor: '#473ff6', color: 'white', textDecoration: 'underline' }} id="alert-dialog-title">
                        <span>
                            <h3>{"Hey Trucker"}</h3>
                        </span>
                    </DialogTitle>
                    <DialogContent style={{ backgroundColor: '#473ff6', color: 'white', display: 'flex', flexDirection: 'column' }}>
                        <div className={'regular'}>
                            <Link
                                style={{ color: 'white' }}
                                onClick={() => this.setState({ open: false })}
                                to={'/'}
                            >
                                <h5>{"Home"}</h5>
                            </Link>
                        </div>
                        {this.menuButtonrRenderProfileJobBoardsOrJoinNow()}
                        {this.menuButtonrenderLoginOrLogOut()}
                    </DialogContent>

                </Dialog >
            </div >
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, actions)(Header);
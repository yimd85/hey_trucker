import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Payments from './Payments';
import * as actions from '../actions'
import Logo from '../images/Logo-Light.png'

class Header extends Component {
    state = { open: false }

    renderLoginOrLogOut(loggedInStatus) {

        if (loggedInStatus) {
            return (
                <div className={'paddingHeader center'}   >
                    <a
                        className={'headerNavLinks headerColor'}
                        href="/api/logout"
                    >
                        {'Log Out'}
                    </a>
                </div>
            );

        } else {
            return (
                <div className={'paddingHeader center'}   ><a className={'headerNavLinks headerColor'} href="/login">{'Log In'}</a></div>
            );
        }

    }


    menuButtonrenderLoginOrLogOut(loggedInStatus) {


        if (loggedInStatus) {
            return (
                <div className={'dialogNavSpacing'}>
                    <a
                        href="/api/logout"
                        className={' headerNavLinks headerColor'}
                        onClick={() => this.setState({ open: false })}
                    >
                        {"Log Out"}
                    </a>
                </div>
            );

        } else {
            return (
                <div className={'dialogNavSpacing'}>
                    <Link
                        className={'headerNavLinks headerColor'}
                        onClick={() => this.setState({ open: false })}
                        to={'/login'}
                    >
                        {"Log In"}
                    </Link>
                </div>
            );
        }
    }


    renderProfileJobBoardsOrJoinNow(customerRegistered, loggedInStatus) {
        if (!loggedInStatus) {
            return null

        } else if (customerRegistered) {
            return (<>
                <div className={'paddingHeader center'}   ><a className={'headerNavLinks headerColor'} href="/profile">{'Profile'}</a></div>
                <div className={'paddingHeader center'}   ><a className={'headerNavLinks headerColor'} href="/jobs">{'Job Board'}</a></div >
            </>)
        } else {
            return (<div className={'paddingHeader center'}   ><a className={'headerNavLinks headerColor'} href="/join">{'Join Now'}</a></div>)
        }
    }

    menuButtonrRenderProfileJobBoardsOrJoinNow(customerRegistered, loggedInStatus) {

        if (!loggedInStatus) {
            return null

        } else if (customerRegistered) {
            return (<>
                <div className={'dialogNavSpacing'}>
                    <Link
                        className={' dialogNavSpacing headerNavLinks headerColor'}
                        onClick={() => this.setState({ open: false })}
                        to={'/profile'}
                    >
                        {"Profile"}
                    </Link>
                </div>
                <div className={'dialogNavSpacing'}>
                    <Link
                        className={'dialogNavSpacing headerNavLinks headerColor'}
                        onClick={() => this.setState({ open: false })}
                        to={'/jobs'}
                    >
                        {"Job Board"}
                    </Link>
                </div>
            </>)
        } else {
            return (<div className={'dialogNavSpacing'}>
                <Link
                    className={'headerNavLinks headerColor'}
                    onClick={() => this.setState({ open: false })}
                    to={'/join'}
                >
                    {"Join Now"}
                </Link>
            </div>)
        }

    }

    render() {
        let customerRegistered = null;
        const { auth } = this.props.auth;
        if (auth) {
            if (auth.customerId) {
                customerRegistered = auth.customerId;
            }
        }
        let loggedInStatus = null;
        if (auth) {
            if (auth.userProfileId) {
                loggedInStatus = auth.userProfileId;
            }
        }
        return (
            <div>
                <nav className={'gilroy-regular backGroundColor'}  >
                    <div className={'insideNavParentDiv row'} >
                        <Link
                            to={"/"}
                            className="leftNavItems"
                        >
                            <img
                                className="right-header"
                                height='60'
                                src={Logo}
                                alt={'hey-trucker-logo'}
                            />
                        </Link>
                        <div className="middleIcon center headerColor">
                            <a onClick={() => this.setState({ open: true })}>
                                <i className="material-icons">{"menu"}</i>
                            </a>
                        </div>

                        <Link
                            to={"/"}
                            className="middleIcon"
                        >
                            <img
                                className="right-header"
                                height='60'
                                src={Logo}
                                alt={'hey-trucker-logo'}
                            />
                        </Link>

                        <div className="middleIcon center hidden"  >
                            <a>
                                <i className="material-icons">{"menu"}</i>
                            </a>
                        </div>
                        <div className={'leftNavItems row'} >
                            <div className={'paddingHeader center'}   >
                                <a className={'headerNavLinks headerColor'} href="/">
                                    {'Home'}
                                </a>
                            </div>
                            {this.renderProfileJobBoardsOrJoinNow(customerRegistered, loggedInStatus)}
                            {this.renderLoginOrLogOut(loggedInStatus)}


                        </div>

                    </div>
                </nav>

                <Dialog open={this.state.open || false} >

                    <DialogTitle className={' headerColor backGroundColor underLine'} >
                        <span>
                            <h3>{"Hey Trucker"}</h3>
                        </span>
                    </DialogTitle>
                    <DialogContent className={'column backGroundColor'} >
                        <div  >
                            <Link
                                className={'headerNavLinks headerColor'}
                                onClick={() => this.setState({ open: false })}
                                to={'/'}
                            >
                                <span >{"Home"}</span>
                            </Link>
                        </div>
                        {this.menuButtonrRenderProfileJobBoardsOrJoinNow(customerRegistered, loggedInStatus)}
                        {this.menuButtonrenderLoginOrLogOut(loggedInStatus)}
                    </DialogContent>

                </Dialog >
            </div >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, actions)(Header);
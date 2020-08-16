import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

import Logo from './Logo-Light.png'

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return null;
            case false: //if not signed in
                return <li>
                    <a
                        href="/auth/google"
                        style={{
                            textTransform: "capitalize",
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#473ff6',
                            backgroundColor: '#fff'
                        }}
                        className="waves-effect waves-light btn"
                    >
                        {'Login'}
                    </a>
                </li>;
            default: //if not signed in
                return <li>
                    <a
                        href="/api/logout"
                        style={{
                            textTransform: "capitalize",
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: '#473ff6',
                            backgroundColor: '#fff'
                        }}
                        className="waves-effect waves-light btn"
                    >
                        {'Log Out'}
                    </a>
                    <Payments/>
 

                    
                </li>;
        }
    }
    render() {
        return (
            <div>
                <nav style={{ backgroundColor: '#473ff6', height: '84px' }} >
                    <div style={{ padding: '10px 30px' }} className="nav-wrapper">
                        <Link
                            to={this.props.auth ? "/surveys" : "/"}
                            className="brand-logo"
                        >
                            <img
                                className="right-header"
                                height='60'
                                src={Logo}
                                alt={'hey-trucker-logo'}
                            />
                        </Link>
                        <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {/* <li ><a className={'regular'} style={{ fontSize: '18px' }} href="/">Home</a></li> */}
                            {/* <li><a className={'regular'} style={{ fontSize: '18px' }} href="/">Services</a></li>
                            <li><a className={'regular'} style={{ fontSize: '18px' }} href="/">Truckers</a></li>
                            <li><a className={'regular'} style={{ fontSize: '18px' }} href="/">About Us</a></li> */}
                            <li><a className={'regular'} style={{ fontSize: '18px' }} href="/job_board">Join Now</a></li>
                            <li><a className={'regular'} style={{ fontSize: '18px' }} href="/job_board">Job Boards</a></li>
                            <li><a className={'regular'} style={{ fontSize: '18px' }} href="/account">Account</a></li>
                            <li><a className={'regular'} style={{ fontSize: '18px' }} href="/account">Payments</a></li>
                            

                            {/* <a
                                href="/"
                                style={{
                                    textTransform: "capitalize",
                                    fontSize: '18px',
                                    fontWeight: 'bold',
                                    color: '#473ff6',
                                    backgroundColor: '#fff'
                                }}
                                className="waves-effect waves-light btn"
                            >
                                {'Login'}
                            </a> */}
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/">Sass</a></li>
                    <li><a href="/">Components</a></li>
                    <li><a href="/">Javascript</a></li>
                    <li><a href="/">Mobile</a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header);
import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../history'
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';
import Jobs from './Jobs';
import Profile from './Profile';
import Join from './Join';
import Login from './Login';
import Spinner from './Spinner';
import DriverUpdate from './DriverUpdate';


const PrivateRoute = ({ component: Component, auth, ...rest }) => (

    <Route {...rest} render={props => (
        auth
            ? <Component {...props} />
            : <Redirect to={'/login'} />
    )} />
);


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const { auth } = this.props.auth;
        return (
            <div /* className='container' */ >
                {auth ?
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                <PrivateRoute exact path="/" auth={auth} component={Landing} />
                                <PrivateRoute exact path="/join" auth={auth} component={Join} />
                                <PrivateRoute exact path="/jobs" auth={auth} component={Jobs} />
                                <PrivateRoute exact path="/profile" auth={auth} component={Profile} />
                                <PrivateRoute exact path="/driverupdate" auth={auth} component={DriverUpdate} />
                            </Switch>
                        </div>
                    </Router>
                    :
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                <Route exact path="/" component={Landing} />
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </div>
                    </Router>
                }
                <Spinner />

            </div>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, actions, null, { pure: false })(App);
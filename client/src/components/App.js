import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';
import Jobs from './Jobs';
import Profile from './Profile';
import Join from './Join';
import Login from './Login';



class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }


    render() {
        return (
            <div /* className='container' */ >
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/join" component={Join} />
                        <Route exact path="/jobs" component={Jobs} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/Login" component={Login} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);
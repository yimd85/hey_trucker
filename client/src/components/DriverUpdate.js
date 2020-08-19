
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Join from './Join';

class DriverUpdate extends Component {

    render() {
        const { driver } = this.props.auth;
        return (
            <Join driverUpdate driver={driver} />
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})


export default connect(mapStateToProps, actions)(DriverUpdate);
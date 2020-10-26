import axios from 'axios';
import { FETCH_USER, GET_DRIVER, SPINNER, ACCOUNT_NOTIFY, FETCH_STRIPE_INFO } from './types';

import { history } from '../history';

// export const fetchUser = () => {
//     return dispatch => {
//         axios.get('/api/current_user')
//             .then(res => dispatch({
//                 type: FETCH_USER,
//                 payload: res
//             }));
//     };
// };

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });

    if (res.data.subscriptionId) {
        const info = await axios.get('/api/stripeCustomer');
        dispatch({ type: FETCH_STRIPE_INFO, payload: info.data });
    }
};

export const addMembership = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}


export const updateCreditCardInfo = token => async dispatch => {
    const res = await axios.put('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch(accountNotify(true));
    await new Promise((resolve) => setTimeout(resolve, 2500))
    dispatch(accountNotify(false));
}


export const cancelMemberShip = () => async dispatch => {
    dispatch(spinner(true));
    const res = await axios.delete('/api/stripe');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch(spinner(false));
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch(accountNotify(true));
    await new Promise((resolve) => setTimeout(resolve, 2500))
    dispatch(accountNotify(false));
}


export const renewMembership = () => async dispatch => {
    dispatch(spinner(true));
    const res = await axios.get('/api/stripeRenew');
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const info = await axios.get('/api/stripeCustomer');
    dispatch(spinner(false));
    dispatch({ type: FETCH_USER, payload: res.data });
    dispatch({ type: FETCH_STRIPE_INFO, payload: info.data });
    dispatch(accountNotify(true));
    await new Promise((resolve) => setTimeout(resolve, 2500))
    dispatch(accountNotify(false));
}

 

export const getDrivers = () => async dispatch => {
    const res = await axios.get('/api/driver',);
    dispatch({ type: GET_DRIVER, payload: res.data });
}

export const addDrivers = (data) => async dispatch => {
    const res = await axios.post('/api/driver', data);
    dispatch({ type: GET_DRIVER, payload: res.data });
}


export const updateDrivers = (data) => async dispatch => {
    dispatch(spinner(true));
    await axios.put('/api/driver', data); //need to update this
    await new Promise((resolve) => setTimeout(resolve, 1500));
    dispatch(spinner(false));
    dispatch(accountNotify(true));
    history.push('/profile');
    await new Promise((resolve) => setTimeout(resolve, 2500))
    dispatch(accountNotify(false));
    // dispatch({ type: GET_DRIVER, payload: res.data });
}

export const spinner = data => {
    return { type: SPINNER, payload: data }
}

export const accountNotify = data => {
    return { type: ACCOUNT_NOTIFY, payload: data }
}
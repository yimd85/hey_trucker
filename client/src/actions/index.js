import axios from 'axios';
import { FETCH_USER } from './types';


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
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}


export const addDrivers = () => async dispatch => {
    const res = await axios.post('/api/driver');
    dispatch(
        console.log(res, 'test actions')
    )
}

export const getDrivers = () => async dispatch => {
    const res = await axios.put('/api/driver');
    dispatch(
        console.log(res, 'test actions')
    )
}



export const logIn = () => async dispatch => {
    const res = await axios.get('/auth/google');
}
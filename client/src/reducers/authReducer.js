import { FETCH_USER, GET_DRIVER, SPINNER, ACCOUNT_NOTIFY, FETCH_STRIPE_INFO } from '../actions/types';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                auth: action.payload
            };

        case GET_DRIVER:
            return {
                ...state,
                driver: action.payload[0]
            };


        case ACCOUNT_NOTIFY:
            return {

                ...state,
                notification: action.payload
            }


        case SPINNER:
            return {
                ...state,
                spinner: action.payload
            };

        case FETCH_STRIPE_INFO:
            return {
                ...state,
                stripeInfo: action.payload
            }

        default:
            return { ...state };
    }
}
import { FETCH_USER, ADD_DRIVER } from '../actions/types';

export default function (state = null, action) {

    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;

        case ADD_DRIVER:
            return action.payload || false;
        default:
            return state;
    }
}
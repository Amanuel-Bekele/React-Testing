import * as types from '../actions/types';

export default (state = [], action) => {
    switch(action){
        case types.SAVE_COMMENT: {
            return [...state, action.payload]
        }
        default: return state;
    }
}
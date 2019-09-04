import * as types from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case types.SAVE_COMMENT: {
            return [...state, action.payload]
        }
        case types.FETCH_COMMENTS: {
            const comments = action.payload.data.map(
                comment => comment.name
            )
            return [...state, ...comments];
        }
        default: return state;
    }
}
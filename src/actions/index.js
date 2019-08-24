import * as types from 'actions/types';

export const saveComment = (comment) => {
    return {
        type: types.SAVE_COMMENT,
        payload: comment
    }
}
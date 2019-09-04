import * as types from 'actions/types';
import axios from 'axios';

export const saveComment = (comment) => {
    return {
        type: types.SAVE_COMMENT,
        payload: comment
    }
}

export const fetchComments = () => {
    const respose = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type: types.FETCH_COMMENTS,
        payload: respose
    }
}
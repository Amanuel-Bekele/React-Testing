import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('hadles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'This is a dope comment!'
    }
    const newState = commentsReducer([], action);
    expect(newState).toEqual(['This is a dope comment!']);
});

it('hadles actions with unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]); 
});
import { saveComment } from 'actions';
import SAVE_COMMENT from 'actions/types';
import { exportSpecifier } from '@babel/types';

describe('saveComment', () => {
    it('should have the correct type', () => {
        const action = saveComment();
        expect(action.type).toEqual('SAVE_COMMENT')
    });

    it('should have the correct payload', () => {
        const dummyComment = 'This is a dope comment!'
        const action = saveComment(dummyComment);
        expect(action.payload).toEqual(dummyComment);
    });
});
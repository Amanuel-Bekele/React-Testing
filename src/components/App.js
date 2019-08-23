import React from 'react';
import { Provider } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    )
}
import React from 'react';
import { shallow, mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

beforeEach(() => {
    const initialState = {
        comments: ['comment1', 'comment2']
    }
    wrapper = mount(<Root initialState={initialState}>
        <CommentList />
    </Root>)
});

it('Crates an LI element per comment', () => {
    expect(wrapper.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    expect(wrapper.render().text()).toContain('comment1');
    expect(wrapper.render().text()).toContain('comment2')
});



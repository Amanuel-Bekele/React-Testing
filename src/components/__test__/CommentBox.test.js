import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root><CommentBox/></Root>
    );
});

afterEach(() => {
    wrapped.unmount();
})

it('should have a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('TextArea', () => {
    let e;
    beforeEach(() => {
        e = { target: { value: 'This is a dummy text' } };
        wrapped.find('textarea').simulate('change', e)
        wrapped.update();
    });
    it('should have a text are user can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(e.target.value);
    });

    it('should empty text area after form is submitted', () => {
        wrapped.find('form').simulate('submit', e);
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

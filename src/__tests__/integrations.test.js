import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    // Turning off any attempt made by axios to make a network request.
    moxios.install();

    // Instade give this stub response for axio's network call.
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Comment1'}, {name: 'comment2'}]
    });

});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>)

    wrapped.find('.fetch-comments').simulate('click');

    // Create a timer to let moxios prepare the response before
    // the action is dispatched to CommentsReducer
    moxios.wait( () => {

        // Force update wrapper to reflect comment addtion in CommentList component
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);

        // Force Jest to wait for timer's complition before it says 
        // it has tun all the test.
        done(); 
        wrapped.unmount();
    });
});
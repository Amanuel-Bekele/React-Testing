import React from 'react'
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {

    state = {
        comment: ''
    }
    handleChange = e => {
        this.setState({ comment: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.saveComment();
        this.setState({ comment: '' });
    };

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h4>Add a Comment</h4>
                <textarea value={this.state .comment}
                    onChange={e => this.handleChange(e)} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);
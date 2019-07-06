import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPostsAction } from '../redux/actions/postActions';
class Posts extends Component {
    componentDidMount() {
        this.props.fetchPostsAction();
    }
    
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h2>Posts</h2>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPostsAction: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
 
const mapStateToProps = state => ({
    posts: state.posts.items // root reducer defined in postReducer
});

export default  connect(mapStateToProps, {fetchPostsAction})(Posts)

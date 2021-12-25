import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";

const Posts = props => {
    useEffect(() => {
        props.fetchPosts();
    }, []);

    useEffect(() => {
        if (Object.keys(props.newPost).length !== 0) {
            console.log('props.newPost', props.newPost);
            props.posts.unshift(props.newPost);
        }
    }, [props.newPost])

    var postItems = props.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));

    return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
    );
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
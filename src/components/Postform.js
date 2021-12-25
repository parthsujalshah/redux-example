import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions/postActions";

const Postform = props => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    return (
        <div>
            <h1>Add Post</h1>
            <form onSubmit={e => {
                e.preventDefault();
                const post = {
                    title,
                    body
                }
                props.createPost(post);
            }}>
                <div>
                    <label>Title: </label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <br />
                <div>
                    <label>Body: </label>
                    <br />
                    <textarea
                        name="body"
                        onChange={e => setBody(e.target.value)}
                        value={body}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form >
        </div >
    );
};

export default connect(null, { createPost })(Postform);
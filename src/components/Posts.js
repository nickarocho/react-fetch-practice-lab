import React from 'react';
import '../index.css'

const Posts = (props) => (
    <div>
        {props.posts.map(post => (
            <div className="post">
                <div><strong>Title: </strong>{post.title}</div>
                <br />
                <div><strong>Body: </strong>{post.body}</div>
                <hr />
            </div>
        ))}
    </div>
);

export default Posts;
import React, { useState, useEffect } from 'react';
import './Feed.css';

// components


import Post from './Post/Post';



const Feed = () => {
    const [posts, setPosts] = useState([]);


    // useEffect(() => {
    //       posts.collection('posts').orderBy('id', 'desc').onSnapshot(snapshot => {
    //         setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    //    })
    //  }, [])

    return (
        <div className="feed">


            {
                posts.map(post => (
                    <Post
                        key={post.data.id}
                        message={post.data.message}
                        username={post.data.username}
                        timestamp='This is a timestamp'
                     //   profilePic={arif}
                    //    image={postImage}

                    />
                ))
            }
            { <Post
                key='3'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'

            />}
            {
            <Post
                key='4'
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='devarif'
            /> }

        </div>
    )
}

export default Feed;

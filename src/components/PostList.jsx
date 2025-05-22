import React from 'react';
import Post from './Post';

export default function PostList() {
  
  const posts = [
    { id: 1, title: 'This is The Post Title', body: 'The Post Body' },
    { id: 2, title: 'This is The Post Title', body: 'The Post Body' },
    { id: 3, title: 'This is The Post Title', body: 'The Post Body' },
  ];

  return (
    <section className="post-list">
        {posts.map(post => (
            <Post key = {post.id} title={post.title} body={post.body}/>
        ))}
    </section>
  )

}
import React from 'react';
import Post from './Post';
import './PostList.css';

export default function PostList() {
  
  const posts = [
    { id: 1,
       title: 'Did you know… the Eiffel Tower grows in summer?', 
       body: 'The iron structure can be up to 15 cm taller in hot weather, as the metal expands under the sun.' },
    { id: 2, 
      title: 'Fun fact: Bananas are berries, but strawberries aren’t', 
      body: 'Botanically speaking, true berries come from a single flower with one ovary—bananas fit that, strawberries don’t.' },
    { id: 3, 
      title: 'Quick trivia — honey never spoils', 
      body: 'Archaeologists have found perfectly edible honey in 3,000-year-old Egyptian tombs.'},
  ];

  return (
    <section className="post-list">
        {posts.map(post => (
            <Post 
            key = {post.id} 
            title={post.title} 
            body={post.body}
            />
        ))}
    </section>
  );

}
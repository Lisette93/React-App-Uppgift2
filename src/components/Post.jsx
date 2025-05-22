import React from "react";
import './Post.css';

export default function Post({ title, body }) {
  return (
    <article className="post">
      <h2 className="post-title">{title}</h2>
      <hr />
      <p className="post-body">{body}</p>
    </article>
  );
}
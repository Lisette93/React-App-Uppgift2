import React from "react";
import TagButton from "./TagButton";
import "./TagList.css";


const Tags = [
  'Space',
  'History',
  'Nature',
  'Art',
  'Culture',
  'Science',
  'Food',
  'Math',
];

export default function TagList() {
    return(
        <aside className="tag-list">

            {Tags.map(tag => (
                <TagButton
                key={tag}
                label={tag}
                onClick={()=> console.log(`Tag clicked: ${tag}`)}
            />
        
            ))}
        </aside>
    );
}
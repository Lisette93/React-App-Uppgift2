import React from 'react';

export default function TagButton({ label, onClick }) {
  return (
    <button className="tag-button" onClick={onClick}>
      {label}
    </button>
  );
}
import React from 'react'

export default function Quote({ content,author}) {
    return (
      <div className="card">
        <p id="quot">{content}</p>
        <p id="auth">{author}</p>
      </div>
    );
  }

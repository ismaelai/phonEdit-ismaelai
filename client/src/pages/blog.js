import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    alert('You have submitted the form.');
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <div className="container-blog">
      <h1>Visitor blog</h1>
      {submitting && <div>Sending your opinion, please wait...</div>}
      <form onSubmit={handleSubmit}>
        <button>New Entry</button>
        <fieldset>
          <label>
            <p>User Name</p>
            <input name="name" />
            <p>Introduce an entry title</p>
            <input name="title" />
          </label>
        </fieldset>
        <fieldset>
          <textarea placeholder="Write your comment"></textarea>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Blog;

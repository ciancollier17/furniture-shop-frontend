import React from 'react';

const BlogPost = (props) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{props.postTitle}</h2>
      <h3 class="blog-post-date">{props.postDate}</h3>
      <div class="blog-post-content">
        {props.children}
      </div>
    </div>
  );
}

export default BlogPost;

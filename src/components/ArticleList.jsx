import React from 'react';
import Article from './Article';

const ArticleList = ({ posts = [] }) => {
    return (
      <main>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
              minutes={post.minutes}
            />
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </main>
    );
  };
  

export default ArticleList;







import React from "react";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="My Personal Blog" /> 
      <About 
        image="https://via.placeholder.com/215" 
        about="This is my personal blog where I share my thoughts." 
      /> 
      <ArticleList articles={blogData.posts} /> 
    </div>
  );
}

export default App;

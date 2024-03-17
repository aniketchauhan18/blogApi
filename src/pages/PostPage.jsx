import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    try {
      const fetchData = async () => {
        const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data)
      }
      fetchData();
    } catch (err) {
      console.log("Error", err);
    }
  },[]);

  const mappedPosts = posts.map((post, index) => {
    const postId = index + 1;

    return (
      <div className="post" key={index}>
        <p>
          <strong>{post.title}</strong> 
        </p>
        <div className="icons-group">
          <Link to={`${postId}`} className="icons">Click</Link>
        </div>
      </div>
    )
  })

  return (
    <div className="parent-postpage">
      <div className="posts">
        {mappedPosts} 
      </div>
    </div>
  )
}

export default PostPage;
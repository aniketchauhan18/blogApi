import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([])
  const [showComment, setShowComment] = useState(false)

  //using .then syntax

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.log(err))
  // }, [])


  //using async syntax

  useEffect( () => {
    const fetchData = async () => {
      const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data)
    }
    fetchData()
  },[]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/2/comments');
      const data = await response.json();
      setComments(data)
    }
    fetchComments()
  }, [showComment])

  const mappedPosts = posts.map((post, index) => {
    const postId = index + 1;

    return (
      <div className="post" key={index}>
        <p>
          <strong>Title: </strong> {post.title}
        </p>
        <div className="icons-group">
          <Link to={`${postId}`} className="icons">click</Link>
        </div>
      </div>
    )
  })

  return (
    <div className="posts-parent">
      {mappedPosts}
    </div>
  )
}

export default PostPage;
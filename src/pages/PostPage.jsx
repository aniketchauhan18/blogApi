import { useState, useEffect } from "react";

function PostPage() {
  const [posts, setPosts] = useState([]);

  //using .then syntax

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data))
  //     .catch((err) => console.log(err))
  // }, [])


  //using async syntax

  useEffect( () => {
    const fetchData = async() => {
      const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data)
    }
    fetchData()
  },[])

  const mappedPosts = posts.map((post) => {
    return (
      <div className="post">
        <p>
          <strong>Title: </strong> {post.title}
        </p>
        <p>
          <strong>Description:</strong> {post.body}
        </p>
      </div>
    )
  })

  return (
    <div className="posts-parent">
      <div className="posts">
        {mappedPosts}
      </div>
    </div>
  )
}

export default PostPage;
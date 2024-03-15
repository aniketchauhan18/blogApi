import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Post() {
  const [postData, setPostData] = useState([]);
  const { id }  = useParams();
  
  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json();
      setPostData(data)
    }
    fetchPostData()
  }, [])

  return (
    <div className='post-parent'>
      <div className='post-info'>
        <p>{postData.title}</p>
      </div>
    </div>
  )
}

export default Post;
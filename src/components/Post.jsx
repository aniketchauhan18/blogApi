import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LiaComments } from "react-icons/lia";


function Post() {
  const [postData, setPostData] = useState([]);
  const [postComments, setPostComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const { id }  = useParams();
  
  useEffect(() => {
    const fetchPostData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await response.json();
      setPostData(data)
    }
    fetchPostData()
  }, []);

  const handleCommentClick = async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await response.json()
    setPostComments(data);
    setShowComments(prev => !prev)
  };

  const mappedComments = postComments.map((postComment, index) => {
    return (
      <div key={index} className='comment-parent'>
        <div>
          {postComment.body} ~<strong>{postComment.email}</strong>
        </div>
      </div>
    )
  });

  return (
    <div className='post-parent'>
      <div className='post-info'>
        <p className='post-title'>{postData.title}</p>
        <p className='post-body'>{postData.body}</p>
        <div className='btns-parent'>
          <button onClick={handleCommentClick}>
            <LiaComments />
          </button>
        </div>
        <div>
          {showComments && mappedComments}
        </div>
      </div>
    </div>
  )
}

export default Post;
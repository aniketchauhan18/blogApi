import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { LiaComments } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";
import EditableText from './EditableText';


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

  const handleCommentClick = useCallback(async() => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await response.json()
    setPostComments(data);
    setShowComments(prev => !prev)
  }, [id]);

  async function handleDeleteClick () {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
  }

  const mappedComments = postComments.map((postComment, index) => {
    return (
      <div key={index} className='comment-parent'>
        <div>
          {postComment.body} ~<strong>{postComment.email}</strong>
        </div>
      </div>
    )
  });

  const initialText = postData.title;

  return (
    <div className='post-parent'>
      <div className='post-info'>
        <div className='post-title'>
          <EditableText initialText={initialText}/>
        </div>
        <p className='post-body'>{postData.body}</p>
        <div className='btns-parent'>
          <button onClick={handleCommentClick}>
            <LiaComments />
          </button>
          <button>
            <AiOutlineDelete onClick={handleDeleteClick}/>
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
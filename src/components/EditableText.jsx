import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Editabletitle({ initialTitle, initialBody , isEditing}) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("");
  const { id } = useParams()
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }
  

  useEffect(() => {
    setTitle(initialTitle)
    setBody(initialBody)
  }, [initialTitle, initialBody])

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'PATCH',
          body: JSON.stringify({
            title,
            body
          }),
          headers: {
            'Content-type': 'application/json',
          },
        })
        const data = await response.json();
        setTitle(data.title);
        setBody(data.body)
        e.target.blur()
      } catch (err) {
        console.log("Error", err);
      }
    }
  }

  

  return (
    <div className="edit-cmp">
      <div className="post-t">
        {isEditing ?
          <input
            className="edit-input post-t"
            type="textarea"
            value={title} 
            onChange={handleTitleChange}
            onKeyDown={handleKeyPress}
          />: <span>
            {title}
          </span>
        }
      </div>
      <div className="post-b">
        {isEditing ?
          <input
            className="edit-input post-b"
            type="title"
            value={body} 
            onChange={handleBodyChange}
            onKeyDown={handleKeyPress}
          />: <span>
            {body}
          </span>
        }
      </div>
    </div>
  )
}

export default Editabletitle;
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";

function Editabletitle({ initialTitle, initialBody , isEditing}) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

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
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: {title},
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json();
      setTitle(data.title.title);
      e.target.blur()
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
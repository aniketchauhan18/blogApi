import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";

function EditableText({ initialText }) {
  const [text, setText] = useState("")
  const [isEditing , setIsEditing] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    setText(initialText)
  }, [initialText])

  const handleEditClick = () => {
    setIsEditing(prev => !prev)
  }

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
          title: {text},
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json();
      setText(data.title.text);
      e.target.blur()
    }
  }

  return (
    <div className="edit-cmp">
      {isEditing ?
        <input
          className="edit-input"
          type="text"
          value={text} 
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />: <span>
          {text}
        </span>
      }
      <button onClick={handleEditClick}>
        <FaRegEdit />
      </button>
    </div>
  )
}

export default EditableText;
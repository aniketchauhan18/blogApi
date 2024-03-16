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

  return (
    <div>
      {isEditing ?
        <input
          type="text"
          value={text} 
          onChange={handleChange}
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
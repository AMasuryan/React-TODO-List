import  { useState } from "react"
import "./todostyle.scss"
import "./addTodo.style.scss"
import {dayEnum} from '../assets/todos.js'

const EditTodo = ({todo,onCancel,onSave}) => {
  const [updatedTodo, setUpdatedTodo] = useState(todo)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdatedTodo({
      ...updatedTodo, [name]:value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(updatedTodo)
  }

  return (
    <div className="modal addtodo">
      <div className="wnd">
        <form action="" onSubmit={handleSubmit}>
          <input name="title" type="text" value={updatedTodo.title}  onChange={handleChange}/>
          <textarea name="description" value={updatedTodo.description} onChange={handleChange} cols="30" rows="10"></textarea>
          <select name="weekDay" value={updatedTodo.weekDay} onChange={handleChange}>
            {Object.values(dayEnum).map((value) => (<option key={value} value={value}>{value}</option>))}
          </select>
          <div className="ctrl">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTodo

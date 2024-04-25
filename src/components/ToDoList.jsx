import "./ToDo.style.scss"
import { useState, Fragment } from "react"
import ToDo from "./ToDo.jsx"
import data from "../assets/todos.js"
import AddToDo from "./addTodo.jsx"
import EditTodo from "./EditTodo.jsx"
import { createPortal } from "react-dom"

const ToDoList = () => {
  const [todos, setTodos] = useState(data.slice())
  const [add, setAdd] = useState(false);
  const [editingId, setEditingId] = useState(null)
  function handeComplate(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, complated: true } : todo
    );
    setTodos(updatedTodos)
  }

  function handeDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }

  function handleAdd(todo) {
    setTodos([todo, ...todos])
    setAdd(false)
  }

  function handleEditTodo(id) {
    setEditingId(id)
  }

  return (
    <section className="todolist">
      <button onClick={() => setAdd((value) => !value)} className="add">
        Add Tabs
      </button>
      {add && createPortal(<AddToDo fnAdd={handleAdd} />, document.body)}
      {editingId && (
        <EditTodo
          todo={todos.find((todo) => todo.id === editingId)}
          onCancel={() => setEditingId(null)}
          onSave={(updatedTodo) => {
            const updatedTodos = todos.map((todo) =>
              todo.id === updatedTodo.id ? updatedTodo : todo
            )
            setTodos(updatedTodos)
            setEditingId(null)
          }}
        />
      )}
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          <ToDo
            fnDelete={handeDelete}
            fnComplate={handeComplate}
            fnEditToto={handleEditTodo}
            {...todo}
          />
        </Fragment>
      ))}
    </section>
  )
}

export default ToDoList
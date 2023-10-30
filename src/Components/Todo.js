import React from 'react'
import { FortAwesomeIcon } from '@fortawesome/react-fortawesome'
import { faPenSquare, faTrashAlt } from '@fontawesome/free-solid-svg-icons'

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}

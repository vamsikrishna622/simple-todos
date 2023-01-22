// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteUser} = props
  const {title, id} = todo

  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="todo-item-container">
      <p className="title">{title}</p>
      <button type="button" className="dlt-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

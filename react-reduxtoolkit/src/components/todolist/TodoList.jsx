import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo,deleteTodo } from './todoSlice'

const TodoList = () => {
    const todos=useSelector((state)=>state.todos)
    const dispatch=useDispatch()

    const handleAdd=()=>{
        const newTodo=prompt('Enter the item to add in list')
        if(newTodo){
            dispatch(addTodo(newTodo))
        }
    }

    const handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }

  return (
    <div>
      <h3>Todo List</h3>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>{todo.text}
            <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </li>
        ))}
     
      </ul>
       
    </div>
  )
}

export default TodoList

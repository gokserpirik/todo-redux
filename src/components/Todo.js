import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleTodo, removeTodo } from '../features/todo'

function Todo() {
    const todo = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()
  return (
    <div className='todos'>
        {todo.map((todo) => {
           if(todo !== null) { return(
            <div className='todoitem' key={todo.id}>
            <h1>{todo.title}</h1>
            <button  onClick={()=> dispatch(toggleTodo(todo.title)) } > {todo.completed ? "Done" : "Not Done"} </button>
            <button onClick={()=> dispatch(removeTodo(todo.title))}> - </button>
        </div>)}
        })}
    </div>
  )
}

export default Todo
import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addTodo } from '../features/todo'

function Submit() {
    const dispatch = useDispatch()
    const [todoitem, setTodo] = useState("")
  return (
    <div className='addtodo'>

        <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todoitem} name="todopart" />
        <button onClick={()=> dispatch(addTodo({title:todoitem, completed: false}))}> Submit </button>
    </div>
  )
}

export default Submit
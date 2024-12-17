import React from 'react'

function TodoList({todos, forDelete}) {


  return (
    <div>
        <ul>
            {todos.map((value, index)=>(
                <li 
                key={index}>{value}
                <button onClick={()=>forDelete(index)}>delete task!</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList
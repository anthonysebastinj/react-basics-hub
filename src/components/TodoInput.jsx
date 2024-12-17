import React, { useState } from 'react'

function TodoInput({onAddTodo}) {
    const [inputValue, setInputValue]=useState(""); 

    const addingTodo=()=>{
        onAddTodo(inputValue);
        setInputValue("");
    }
  return (
    <div>
        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button onClick={addingTodo} >add</button>
    </div>
  )
}

export default TodoInput
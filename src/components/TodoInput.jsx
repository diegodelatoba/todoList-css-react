import React, { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos} = props
    const [todoValue, setTodoValue] = useState('')
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }}
        placeholder="Enter todo..." />
        <button onClick={() => {
            handleAddTodos(todoValue)

            setTodoValue('') /* Remove all content in input after added */
        }}>Add</button>
    </header>
  )
}

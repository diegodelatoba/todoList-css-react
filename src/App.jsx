import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState(['Go to gym',
    'Do a leetcode problem', 'Apply to jobs', 'Check email'])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  function handleDeleteTodos(newTodo){
    const newTodoList = todos.filter((todo, todoIndex) =>
    {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }
  function handleEditTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }
  return (
    <>
      <main>
        <TodoInput handleAddTodos={handleAddTodos}/>
        <TodoList handleDeleteTodos={handleDeleteTodos} todos={todos} />
      </main>
    </>
  )
}

export default App

import { useState , useEffect } from 'react'
import React from 'react'
import { Todoprovider } from './Todocontext'
import TodoFr from './components/TodoFr.jsx'
import TodoIteam from './components/TodoIteam.jsx'


function App() {
  const [todos, settodos] = useState([])

  const addTodo = (todo) =>{
  settodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const UpdateTodo = (id,Todo) =>{
    settodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? Todo: prevTodo)))
  }

  const deleteTodo = (id) =>{
    settodos((pre)=> pre.filter((prevTodo)=>prevTodo.id !== id))
  }

  const toggleCompleted = (id) =>{
    settodos((prev) => prev.map((prevTodo)=>(prevTodo.id === id ? 
           {...prevTodo,completed:!prevTodo.completed}:prevTodo  )))
  }

  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"))
  }, [])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
   <Todoprovider value={{todos,addTodo,UpdateTodo,deleteTodo,toggleCompleted,}}>
   <div className="bg-[#172842] min-h-screen py-8">
   <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
       <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
       <div className="mb-4">
         <TodoFr/>
       </div>
       <div className="flex flex-wrap gap-y-3">
        {todos.map((todo)=>( 
          <div className='w-full' key={todo.id}>
          <TodoIteam todo={todo}/>
          </div>
        ))}
       </div>
   </div>
</div>
   </Todoprovider>
  )
}

export default App

import { useState } from 'react'
import Navbar from './Components/Navbar'

function App() {

  const [todo, setTodo] = useState(" ")
  const [todos, setTodos] = useState([])


  const handleEdit = ()=>{

    }
  const handleDelete = ()=>{

  }

  const handleAdd = ()=>{
    setTodos([...todos, {todo, isCompleted: false}])
    setTodo("")
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }


  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 rounded-xl p-5 bg-slate-100 min-h-[80vh]'>
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
        <button onClick={handleAdd} className='bg-slate-800 hover:bg-slate-950 p-3 py-1 text-white rounded-md mx-6'>Add</button>
      </div>
    <h2 className='text-xl font-bold'>Your Todos</h2>
    
    <div className="todos">
    <div className="todo flex">
    <div className="text">My Todo</div>
    <div className='buttons'>
      <button onClick={handleEdit} className='bg-slate-800 hover:bg-slate-950 p-3 py-1 text-white rounded-md mx-2'>Edit</button>
      <button onClick={handleDelete} className='bg-slate-800 hover:bg-slate-950 p-3 py-1 text-white rounded-md mx-2'>Delete</button>

    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [todo, setTodo] = useState(" ")
  const [todos, setTodos] = useState([])


  const handleEdit = ()=>{

    }
  const handleDelete = ()=>{

  }

  const handleAdd = ()=>{
    setTodos([...todos, {id:uuidv4(),todo, isCompleted: false}])
    setTodo("")
    console.log(todos)
  }

  const handleChange = (e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id= e.target.name;
    console.log(id)
    let index = todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }
  


  return (
    <>
    <Navbar/>
    <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-1/2 bg-white' />
        <button onClick={handleAdd} className='bg-slate-800 hover:bg-slate-950 p-3 py-1 text-white rounded-md mx-6'>Add</button>
      </div>
    <h2 className='text-xl font-bold'>Your Todos</h2>
    
    <div className="todos">
      {todos.map(item=>{

      
    return <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
      <input name={item.id} onChange={handleCheckbox} type="checkbox" value={todo.isCompleted} id="" />
    <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
    <div className="buttons">
      <button onClick={handleEdit} className='bg-slate-800 hover:bg-slate-950 p-3 py-1 text-white rounded-md mx-2'>Edit</button>
      <button onClick={()=>{handleDelete(item.id)}} className='bg-slate-800 hover:bg-slate-950 p-3 py-1 text-white rounded-md mx-2'>Delete</button>

    </div>
    </div>
    })}
    </div>
    </div>
    </>
  )
}

export default App

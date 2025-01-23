import { useEffect, useState } from 'react'

import './App.css'
import TaskList from './componentes/TaskList'
import AddTask from './componentes/AddTask'
import { getTasks } from './servicios/getTasks'

function App() {

  const [tasks,setTasks] = useState([])
  //const [pedirTasks,setPedirTasks]=useState(false);

  useEffect(()=>{
    getTasks("tasks",(tasks)=>{
      setTasks([...tasks]);
      //setPedirTasks(false);
    })//Igual podira funcionar sin desestructurar, pero por si las moscas.

  },[])

  return (
    <>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App

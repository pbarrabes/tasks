import { useState } from "react"
import {postTasks} from "../servicios/postTasks"
export default function AddTask({setPedirTasks}) {

  const [newTask,setNewTask] = useState('')


  function handleAddTask(){
    //Las lineas de abajo es para la version array en memoria.
    //setTasks([...tasks,{"name":newTask,"id":tasks.length+1}])
    //setNewTask('')

    // Usando peticiones
    postTasks("tasks",{"name":newTask},()=>{
        setPedirTasks(true)
        alert("Tarea Añadida con exito")
    });

  }

    return (
      <>
          <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)}/>
          <button onClick={handleAddTask} >Añadir Tarea</button>
      </>
    )
}


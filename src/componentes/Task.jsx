import { useState } from 'react'
import {delTasks} from '../servicios/delTask'
import { patchTasks } from '../servicios/patchTasks';

export default function Task({task,tasks,setTasks}) {
  const [isEditing,setIsEditing] = useState(false);
  const [newTask,setNewTask]=useState(task.name);

  function handleSaveTask(){

    patchTasks("tasks/"+task.id,{"name":newTask},()=>{
      setTasks(tasks.map((t)=>task.id==t.id?{...t, name: newTask}:t))
    })

    setIsEditing(false);
  }

    return (
      <>
          <li>{isEditing?
            <input type="text" value={newTask} onChange={
              (e)=>setNewTask(e.target.value)
            }/>
            :task.name}
          </li>
          
          {isEditing? <button onClick={handleSaveTask}>Guardar</button>:<button onClick={()=>setIsEditing(true)}>Editar</button>}
          <button onClick={()=>{
              delTasks("tasks/"+task.id,()=>setTasks(tasks.filter(t=>t.id!=task.id)));
            }} >Eliminar</button>
      </>
    )
}


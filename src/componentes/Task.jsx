import { useState } from 'react'
import {delTasks} from '../servicios/delTask'

export default function Task({task,tasks,setTasks,setPedirTasks}) {
  const [isEditing,setIsEditing] = useState(false);

    return (
      <>
          <li>{isEditing?
            <input type="text" value={task.name} onChange={
              (e)=>setTasks(tasks.map(t=>t.id==task.id?{...t,name:e.target.value}:t))
            }/>
            :task.name}
          </li>
          
          {isEditing? <button onClick={()=>setIsEditing(false)}>Guardar</button>:<button onClick={()=>setIsEditing(true)}>Editar</button>}
          {/* <button onClick={()=>setTasks(tasks.filter(t=>t.id!=task.id))} >Eliminar</button> */}
          <button onClick={()=>{
              delTasks("tasks/"+task.id,()=>setPedirTasks(true));
            }} >Eliminar</button>
      </>
    )
}


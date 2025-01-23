
import Task from "./Task"
export default function TaskList({tasks,setTasks,setPedirTasks}) {

  const rows = tasks?tasks.map((task,index) => <Task key={index} task={task} tasks={tasks} setTasks={setTasks}/>):[]

    return (
      <ul>
        {rows.length > 0 ?rows:"No hay tareas que mostrar"}
      </ul>
    )
}
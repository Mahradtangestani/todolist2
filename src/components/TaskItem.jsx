import React, { useContext } from "react";
import { taskContext } from "./taskContext";




const TaskItem = ()=>{
    
    const {taskItems , setTaskItems} = useContext(taskContext)

    const handleSetDoneTask = (id)=>{
        const index = taskItems.findIndex(t=>t.id === id);
        let newTaskItems = [...taskItems];
        newTaskItems[index].done = !newTaskItems[index].done
        setTaskItems(newTaskItems)
     }

    const handleSetDeleteTask = (id)=>{
        let newTasks = taskItems.filter(t=> t.id !== id); 
        setTaskItems(newTasks)
     }

    if (taskItems.length){
      return (
          <ul className="list-group m-0 p-0 mt-4 mb-4">
              {
                  taskItems.map((t , indexkey)=>(
                  <li className={`d-flex justify-content-between list-group-item ${t.done ? "list-group-item-success" : ""}`} key={indexkey}>
                     <p>
                        {t.title}
                     </p>
                     <span>
                      {
                          t.done ? (
                            <i className="me-3 pointer bx bx-user-x text-danger transition_200 text_hover_shadow" onClick={()=> handleSetDoneTask(t.id)}></i>
                        ) : (
                            <i className="me-3 pointer bx bx-user-check text-success transition_200 text_hover_shadow" onClick={()=> handleSetDoneTask(t.id)}></i>
                        )
                      }
                        
                        <i className="bx bxs-trash-alt me-3 text-danger pointer transition_200 text_hover_shadow" onClick={()=> handleSetDeleteTask(t.id)}></i>
                     </span>
                  </li>
                  ))
              }
            
          </ul>
      )
    }else{
      return <h5 className="text-danger text-center my-4">Nothing Found...!</h5>
    } 

   
}



export default TaskItem;
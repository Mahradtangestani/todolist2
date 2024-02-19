import React, { useState } from "react";
import TopForm from "./components/TopForm";
import TaskItem from "./components/TaskItem";
import { taskContext } from "./components/taskContext";

function App() {
  
  const [taskItems , setTaskItems] = useState([
    {
      id:1,
      title: "Go shopping",
      done: false ,
    },
    {
      id:2,
      title: "Workout",
      done: true ,
    },
    {
      id:3,
      title: "Learning React",
      done: false ,
    },
  ])

  return (
    
    <div className="container mt-10 w-100 h-100">
       <div className="row h-100 justify-content-center align-items-start">
         <div className="col-12 col-md-8 col-lg-6 bg-mirror">
          <taskContext.Provider value={{
            taskItems,
            setTaskItems
          }}>
             <TopForm />
             <TaskItem />
          </taskContext.Provider>
         </div>
         
       </div>
        
    </div>
    
  );
}

export default App;

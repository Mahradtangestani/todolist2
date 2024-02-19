import React, { useContext, useState } from 'react';
import { taskContext } from './taskContext';


const TopForm = () => {

    const [task , setTask] = useState("")

    const {taskItems , setTaskItems} = useContext(taskContext)

    const handleSetTask = (e)=>{
       setTask(e.target.value)
    }
    
    const handleAddTask = (e)=>{
        e.preventDefault()
        setTaskItems([...taskItems , {id:Math.random() , title: task , done: false}])
        setTask("")
    }
    return (   
        <> 
             <h3 className='text-center pt-4'>
                 Todo List <span className='text-success'><i class="fab fa-angellist"></i></span>
             </h3>
             <form className='mt-5' onSubmit={handleAddTask}>
                <div className='form-group d-flex'>
                    <input type="text" placeholder='What is the task today?' className='form-control' value={task} onChange={handleSetTask}/>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </div>
             </form>
          
        </> 
    );
}

export default TopForm;

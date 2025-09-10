import {useState} from 'react'

export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    
    // const [inputs, setInputs] = useState({
    //         taskName: '',
    //         taskDes: ''
    //     });

    // const handleChange = (e) => {
    
    //     const { name, value } = e.target;
    //         setInputs(prevInputs => ({
    //         ...prevInputs,
    //         [name]: value
    //     }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        if(task.id)
        {
            const updatedTaskList = taskList.map((todo) => (
                todo.id === task.id ? {
                    id:task.id, 
                    name:task.name, 
                    desc:task.desc, 
                    date:`${currentDate.toLocaleTimeString()} ${currentDate.toLocaleDateString()}`} : todo
            ));

            setTaskList(updatedTaskList);
            e.target.taskName.value = "";
            e.target.taskDes.value = ""
            setTask({});
        }
        else{
            const newTask = {
                id:Math.floor(Math.random()*1000), 
                name:e.target.taskName.value, 
                desc:e.target.taskDes.value, 
                date:`${currentDate.toLocaleTimeString()} ${currentDate.toLocaleDateString()}`
            };

            setTaskList([...taskList, newTask]);
        }

        e.target.taskName.value = "";
        e.target.taskDes.value = ""
        setTask({});
        //
        document.querySelector('.form').reset();
    };

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" name='taskName' value={task.name || ""} onChange={e => setTask({...task, name:e.target.value})} placeholder="Task name" autoComplete='off' />
            <textarea name='taskDes' value={task.desc || ""} onChange={e => setTask({...task, desc:e.target.value})} placeholder="Description" />
            <button type='submit'>{task.id ? `Update Task` :`Add Task`}</button>
        </form>
        
    </section>
  )
}
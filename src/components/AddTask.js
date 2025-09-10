import {useState} from 'react'

export const AddTask = ({taskList, setTaskList}) => {
    
    const [inputs, setInputs] = useState({
            taskName: '',
            taskDes: ''
        });

    const handleChange = (e) => {
    
        const { name, value } = e.target;
            setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const newTask = {
            id:Math.floor(Math.random()*1000), 
            name:inputs.taskName, 
            desc:inputs.taskDes, 
            date:`${currentDate.toLocaleTimeString()} ${currentDate.toLocaleDateString()}`
        };

        setTaskList([...taskList, newTask]);
        setInputs([]);
        document.querySelector('.form').reset();
    };

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" name='taskName' value={inputs.taskName} onChange={handleChange} placeholder="Task name" autoComplete='off' />
            <textarea name='taskDes' value={inputs.taskDes} onChange={handleChange} placeholder="Description" />
            <button type='submit'>Add Task</button>
        </form>
        
    </section>
  )
}
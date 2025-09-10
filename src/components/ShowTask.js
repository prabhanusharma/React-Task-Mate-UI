
export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleDelete = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(newTaskList);
    }
    const handleEdit = (id) => {
        const taskToEdit = taskList.find((task) => task.id === id);
        setTask(taskToEdit);
    }

  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Tasks</span>
                <span className="count">3</span>
            </div>
            <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
            {
                taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="name">{task.desc}</span>
                            <span className="time">{task.date}</span>
                        </p>
                        <i onClick={() => handleEdit(task.id) } className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                        
                    </li>
                ))
            }
            
        </ul>
    </section>
  )
}

import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { useState } from "react";
function Dashboard(){
    const [tasks, setTasks] = useState([
        {
            id:1,
            title:"Learn React",description:"Understanding Components",status:"In Progress"
        },

        {
            id:2,
            title:"Build a Project",description:"Create a simple React app",status:"Completed"
        },

        {
            id:3,
            title:"Deploy App",description:"Host the app on a platform",status:"Pending"
        }]);
        function toggleTask(id){
            setTasks(
                tasks.map((task)=> {
                    if(task.id === id){
                        return {...task, status: task.status === "Completed" ? "Pending" : "Completed"};
                    }
                    return task;
                })
            );
        }
        function addTask(newTask){
          setTasks([...tasks, newTask]);

        }
        function deleteTask(id){
            setTasks(tasks.filter((task)=> task.id !== id));
        }
        function Description(newTask){
            console.log("NewTask: ",newTask);
        }
    return (
        <main>
            <p>Count: {}</p>
            <button onClick={()=>setTasks(tasks+1)}>Increase</button>
            <div className="stats-container">
                <StatCard title={"Total Task"} value={"10"}/>
                <StatCard title={"Completed Tasks"} value={"8"}/>
                <StatCard title={"Pending Tasks"} value={"2"}/>
                <StatCard title={"Time Taken"} value={"2hrs"}/>
                <StatCard title={"Completed by"} value={"Virat"} />
            </div>
            <AddTask  onAddTask={addTask}/>
            <Description onAddTask={addTask}/>
            <h2>Recent Tasks</h2>
            <div className="tasks-container">
                {tasks.map((task)=>(
                    <TaskCard key={task.id} title={task.title} description={task.description} status={task.status} onToggle={()=>toggleTask(task.id)} onDelete={()=>deleteTask(task.id)}/>
                ))}
            </div>
            <div>

            </div>
        </main>
    );
}
export default Dashboard;




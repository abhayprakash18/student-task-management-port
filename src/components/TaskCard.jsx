function TaskCard(props) {
    return (
        <div className="task-card">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>Status: {props.status}</p>
            <button onClick={props.onToggle}>
                change Status 
                
            </button>
            <button onClick={props.onDelete}>Delete Task</button>
        </div>
    );
}

export default TaskCard;

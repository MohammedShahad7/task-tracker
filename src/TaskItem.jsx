function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <div className="task-buttons">
        <button
          onClick={() => onToggle(task.id)}
          className={task.completed ? "undo-btn" : "complete-btn"}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
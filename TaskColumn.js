import React from 'react';
import TaskCard from './TaskCard';
import './TaskColumn.css';

const TaskColumn = ({ stage, tasks }) => {
    return (
        <div className="task-column">
            <h2>{stage}</h2>
            <div className="task-list">
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
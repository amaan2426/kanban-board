import { useDrag } from 'react-dnd';
import './TaskCard.css';

const TaskCard = ({ task }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'TASK',
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    return (
        <div ref={dragRef} className={`task-card ${isDragging ? 'dragging' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskCard
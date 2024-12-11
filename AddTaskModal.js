import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTaskModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (title && description) {
            dispatch(addTask({
                id: Date.now(),
                title,
                description,
                stage: 'ToDo'
            }));
            setTitle('');
            setDescription('');
            setShowModal(false);
        }
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add Task</button>
            {showModal && (
                <div className="modal">
                    <h3>Add New Task</h3>
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Add</button>
                    <button onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default AddTaskModal;
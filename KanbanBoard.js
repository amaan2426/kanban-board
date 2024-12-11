import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import SearchBar from './SearchBar';
import AddTaskModal from './AddTaskModal';
import { useSelector } from 'react-redux';
import './KanbanBoard.css';

const stages = ['ToDo', 'InProgress', 'PeerReview', 'Done'];

const KanbanBoard = () => {
    const tasks = useSelector(state => state.tasks.tasks);
    const searchQuery = useSelector(state => state.tasks.searchQuery);

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="kanban-board">
            <SearchBar />
            <div className="kanban-columns">
                {stages.map(stage => (
                    <TaskColumn
                        key={stage}
                        stage={stage}
                        tasks={filteredTasks.filter(task => task.stage === stage)}
                    />
                ))}
            </div>
            <AddTaskModal />
        </div>
    );
};

export default KanbanBoard;
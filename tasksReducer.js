const initialState = {
    tasks: [
        { id: 1, title: 'Task 1', description: 'Description 1', stage: 'ToDo' },
        { id: 2, title: 'Task 2', description: 'Description 2', stage: 'InProgress' },
        { id: 3, title: 'Task 3', description: 'Description 3', stage: 'PeerReview' },
        { id: 4, title: 'Task 4', description: 'Description 4', stage: 'Done' },
    ],
    searchQuery: ''
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'MOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? { ...task, stage: action.payload.stage } : task
                )
            };
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
}
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
});

export const moveTask = (id, stage) => ({
    type: 'MOVE_TASK',
    payload: { id, stage }
});

export const setSearchQuery = (query) => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
});
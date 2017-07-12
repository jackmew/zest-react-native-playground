const addTodo = (text, id) => {
    return {
        type: 'ADD_TODO',
        text,
        id
    };
};
const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};
const setFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};
export { addTodo, toggleTodo, setFilter };

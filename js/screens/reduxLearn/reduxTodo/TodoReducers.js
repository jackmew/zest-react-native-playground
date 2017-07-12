import { combineReducers } from 'redux';

// 定義資料結構
// todo: { id: 0, text: 'showText', completed: false }
const todoReducers = (state = [], action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: action.id, text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
};
const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default combineReducers({
    todos: todoReducers,
    visibilityFilter: visibilityFilterReducer
});

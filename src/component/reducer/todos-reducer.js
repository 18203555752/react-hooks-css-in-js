// src/reducers/todos-reducer.jsx
export const TODO_LIST_ADD = 'TODO_LIST_ADD';
export const TODO_LIST_EDIT = 'TODO_LIST_EDIT';
export const TODO_LIST_REMOVE = 'TODO_LIST_REMOVE';

const randomID = () => Math.floor(Math.random() * 10000);
export const initialState = {
  todos: [{ id: randomID(), content: 'todo list' }],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_LIST_ADD: {
      const newTodo = {
        id: randomID(),
        content: action.payload.content
      };
      return {
        todos: [ ...state.todos, newTodo ],
      }
    }
    case TODO_LIST_EDIT: {
      return {
        todos: state.todos.map(item => {
          const newTodo = { ...item };
          if (item.id === action.payload.id) {
            newTodo.content = action.payload.content;
          }
          return newTodo;
        })
      }
    }
    case TODO_LIST_REMOVE: {
      return {
        todos: state.todos.filter(item => item.id !== action.payload.id),
      }
    }
    default: return state;
  }
}

export default reducer;
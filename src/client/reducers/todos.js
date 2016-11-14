import Immutable from 'immutable';

const todo = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: payload.id,
        text: payload.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== payload.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(item => todo(item, action));
    default:
      return state;
  }
};

export default todos;

export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: {
    id: Date.now().toString(),
    text,
  },
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: {
    id,
  },
});

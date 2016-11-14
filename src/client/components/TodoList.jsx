import React, { PropTypes } from 'react';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li>{todo.text}</li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
};

export default TodoList;

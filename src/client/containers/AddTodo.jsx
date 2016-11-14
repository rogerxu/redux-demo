import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';

const AddTodoComponent = ({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Add</button>
    </div>
  );
};

AddTodoComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onClick: () => { dispatch(addTodo('New Task')); },
});

const AddTodo = connect(
  null,
  mapDispatchToProps,
)(AddTodoComponent);

export default AddTodo;

import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/TodoActions';

const filterTodos = (items, filter) => {
  if (!filter) {
    return items;
  }

  return items;
};

const mapStateToProps = (state) => {
  const items = state.getIn(['todos']);
  const filter = state.getIn(['filter']);

  return {
    todos: filterTodos(items, filter),
  };
};

const mapDispatchToProps = () => ({
  onTodoClick: toggleTodo,
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;

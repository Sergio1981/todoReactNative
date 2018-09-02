import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../actions';
import { deleteTodo } from '../actions';

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDespatchToProps = despatch => ({
    toggleTodo: id => despatch(toggleTodo(id)),
    deleteTodo: id => despatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDespatchToProps)(TodoList);
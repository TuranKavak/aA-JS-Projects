import { connect } from 'react-redux';
import TodoList from './todo_list';

//actions
import { receiveTodos, receiveTodo } from '../../actions/todo_actions'; // action creator
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = state => ({ 
    todos: allTodos(state),
    state
});

const mapDispatchToProps = dispatch => ({ 
    receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);




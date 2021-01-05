import {connect} from 'react-redux';
import StepList from './step_list';

import { receiveStep } from '../../actions/step_actions'; // action creator
import {stepsByTodoId} from '../../reducers/selectors';

const mapStateToProps = (state, {todo_id}) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id
});

const mapDispatchToProps = dispatch => ({ // create action dispatcher
    receiveStep: (step) => dispatch(receiveStep(step))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepList);

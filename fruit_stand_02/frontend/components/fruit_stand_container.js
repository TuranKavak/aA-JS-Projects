import { connect } from 'react-redux';
import { addApple, addOrange, addBanana, clearFruit } from '../actions';
import FruitStand from './fruit_stand';

const mapStateToProps = state => ({
  fruits: state.fruits
});

const mapDispatchToProps = dispatch => ({
  addApple: () => dispatch(addApple()),
  addOrange: () => dispatch(addOrange()),
  addBanana: () => dispatch(addBanana()),
  clearFruit: () => dispatch(clearFruit())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FruitStand);

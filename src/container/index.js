 import increaseAction from '../actions/index'
// const increaseAction = { type: 'increase' }
// Map Redux state to component props
import Counter from '../components/Counter';

import {connect} from 'react-redux';

console.log(increaseAction)
const  mapStateToProps =(state) =>{
    return {
      value: state.count
    }
  }
  
  // Map Redux actions to component props
const mapDispatchToProps=(dispatch) =>{
    return {
      onIncreaseClick: () =>{
           dispatch(increaseAction)
      } 
    }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
export default App;




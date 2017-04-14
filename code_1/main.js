import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

class TodoList extends React.Component {
  render() {
    const { val, onClick } = this.props;
    return (
      <div onClick={onClick}>{val}</div>
    );
  }
}
const mapStateToProps = (status) => ({
  val: status.val
});
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick() {
      dispatch({type: "CHANGE_VALUE"});
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
const reducer = (state = {val: 0}, action) => {
  switch(action.type){
    case "CHANGE_VALUE":
      return {val: state.val==0?1:0};
    default:
      return state;
  }
};
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <VisibleTodoList/>
  </Provider>,
  document.querySelector("#example")
);





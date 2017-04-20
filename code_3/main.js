import React from 'react';
import { render } from 'react-dom';
import { createStore} from 'redux';
import { connect, Provider } from 'react-redux';
import rootReducer from './reducers/index';

//combineReducers test

class ToDo extends React.Component{
  render(){
    const { value, onInputChange, onButtunClick, dataList } = this.props;
    return (
      <div>
        <input value={value} onChange={onInputChange}/>
        <button onClick={onButtunClick}>addItem</button>
        <ul>
          {
            dataList.map( (item,i) => (<li key={i}>{item}</li>) )
          }
          </ul>
      </div>
    )
  }
}
const ToDoV = connect(
  (state) => ({value: state.value, dataList: state.list}),
  (dispatch) => ({
    onInputChange(event){
      dispatch({type: 'TODO_CHANGE_INPUT', data: event.target.value})
    },
    onButtunClick(){
      dispatch({type: 'TODO_ADD_ITEM'})
    }
  })
)(ToDo);

const store = createStore(rootReducer, {
  value: '',
  list: []
});

render(
  <Provider store={store}>
    <ToDoV/>
  </Provider>,
  document.querySelector('#example')
);
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import todoReducer from './todoReducer';

let TodoList = ({items = []}) => (
  <ul>
    {
      items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))
    }
  </ul>
);

class TodoAppView extends React.Component {
  render() {
    let { text, handleChange, handleAddItem, items } = this.props;
    return (
      <div>
        <h3>TodoApp</h3>
        <input type="text" value={text} onChange={handleChange}/>
        <button onClick={handleAddItem}>{'Add #' + (items.length + 1)}</button>
        <TodoList items={items}/>
      </div>
    );
  }
}
let TodoApp = connect(
  (state) => ({
    text: state.text,
    items: state.items
  }),
  (dispatch)=>({
    handleChange(e) {
      dispatch({type:'TODOAPP_INPUT_CHANGE', text: e.target.value });
    },
    handleAddItem() {
      dispatch({type:'TODOAPP_ADD_ITEM'});
    }
  })
)(TodoAppView);

let store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.querySelector('#example'),
);


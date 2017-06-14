import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      text:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return(
      <div>
        <h3>TodoList</h3>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleAddItem}>{'ADD #' + (this.state.items.length+1)}</button>
        <TodoList items={this.state.items}/>
      </div>
    )
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleAddItem(e) {
    e.preventDefault();
    let newItem = {
      id: Date.now(),
      text: this.state.text
    };
    this.setState((prevState) => ({
      ...prevState,
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return(
      <ul>
        {
          this.props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
    )
  }
}

ReactDOM.render(
  <TodoApp/>,
  document.querySelector("#example")
);
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import gameReducer from './gameReducer';

let SquareView = (props) => (
  <button className="square" onClick={props.handleClick}>
    {props.value}
  </button>
);
let Square = connect(
  (state, ownProps) => ({value: state.history[state.curStep].square[ownProps.index]}),
  (dispatch, ownProps) => ({
    handleClick(){
      dispatch({type:"SQUARE_CLICK", index: ownProps.index})
    }
  })
)(SquareView);

let Board = () => (
  <div>
    <div className="board-row">
      <Square index={0}/>
      <Square index={1}/>
      <Square index={2}/>
    </div>
    <div className="board-row">
      <Square index={3}/>
      <Square index={4}/>
      <Square index={5}/>
    </div>
    <div className="board-row">
      <Square index={6}/>
      <Square index={7}/>
      <Square index={8}/>
    </div>
  </div>
);


class GameView extends React.Component {
  render(){
    let {  status, history, handleClear, jumpTo } = this.props;
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div onClick={ handleClear }>{ status }</div>
          <ol>{
            history.map( (move, step) => (
              <li key={step}>
                <a onClick={ jumpTo } data-index={step} style={{"cursor": "pointer"}}>{'#'+step}</a>
              </li>
            ))
          }</ol>
        </div>
      </div>
    )
  }
}

let Game = connect(
  (state) => {
    let history = state.history.slice();
    let curSquare = history[state.curStep].square;
    let winner = calculateWinner(curSquare);
    let status = winner == null
      ? 'Next player is ' + (state.xIsNext ? 'X' : 'O')
      : 'Winner is ' + winner;
    return {
      status: status,
      history: history
    }
  },
  (dispatch) => ({
    handleClear() {
      dispatch({type: "RESET_STATE"})
    },
    jumpTo(e) {
      dispatch({type: "HISTORY_TRAVEL", index: e.target.getAttribute("data-index")})
    }
  })
)(GameView);

let store = createStore(gameReducer);

ReactDOM.render(
  <Provider store={store}>
    <Game/>
  </Provider>,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
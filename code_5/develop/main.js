/**
 * https://discountry.github.io/react/tutorial/tutorial.html#展示每步历史纪录链接
 */
import React from 'react';
import ReactDOM from 'react-dom';

function Square(props){
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

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

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.square[i]}
        onClick={()=>this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      history: [
        {square: new Array(9).fill(null)}
      ],
      curStep: 0,
      xIsNext: true
    }
  }
  jumpTo(step){
    this.setState((prevState) => {
      return {
        history: prevState.history,
        curStep: step,
        xIsNext: step%2 == 0
      }
    })
  }
  handleClear(){
    this.setState({
      history: [
        {square: new Array(9).fill(null)}
      ],
      curStep: 0,
      xIsNext: true
    })
  }
  handleClick(i){
    this.setState((prevState) => {
      let history = prevState.history.slice(0,prevState.curStep+1);
      let square = history[history.length - 1].square.slice();
      square[i] = prevState.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([{square:square}]),
        curStep: prevState.curStep+1,
        xIsNext: !prevState.xIsNext
      }
    })
  }
  render() {
    const history = this.state.history;
    const curSquare = history[this.state.curStep].square;
    let winner;
    const status = (winner = calculateWinner(curSquare)) == null
      ? 'Next player is ' + (this.state.xIsNext ? 'X' : 'O')
      : 'Winner is ' + winner;
    const moves = history.map((move,step) => {
      return(
        <li key={ step }>
          <a onClick={() => this.jumpTo(step)} style={{"cursor":"pointer"}}>{'#' + step}</a>
        </li>
      )
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board square={curSquare} onClick={(i)=>this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div onClick={this.handleClear.bind(this)}>{ status }</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


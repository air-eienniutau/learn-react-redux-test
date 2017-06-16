/**
 * https://discountry.github.io/react/tutorial/tutorial.html#展示每步历史纪录链接
 */
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
  handleClear(){
    this.setState({
      square: Array(9).fill(null),
      xIsNext: true
    })
  }
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
        {square:Array(9).fill(null)}
      ],
      xIsNext: true
    }
  }
  handleClick(i){
    this.setState((prevState) => {
      let history = prevState.history;
      let square = history[history.length - 1].square.slice();
      square[i] = prevState.xIsNext ? 'X' : 'O';
      return {
        history: history.concat([{square:square}]),
        xIsNext: !prevState.xIsNext
      }
    })
  }
  render() {
    const history = this.state.history;
    const curSquare = history[history.length - 1];
    let winner;
    const status = (winner = calculateWinner(curSquare)) == null
      ? 'Next player is ' + (this.state.xIsNext ? 'X' : 'O')
      : 'Winner is ' + winner;

    return (
      <div className="game">
        <div className="game-board">
          <Board square={curSquare} onClick={(i)=>this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{/* TODO */}</ol>
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

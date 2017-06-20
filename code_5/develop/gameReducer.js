
const initState = {
  history: [
    {square: new Array(9).fill(null)}
  ],
  curStep: 0,
  xIsNext: true
};

let gameReducer = (state, action) => {
  if(!state) state = initState;
  switch (action.type){
    case "SQUARE_CLICK":
      let history = state.history.slice(0, state.curStep + 1);
      let curSquare = history[ history.length-1 ].square.slice();

      if(curSquare[action.index]) return state;
      curSquare[action.index] = state.xIsNext ? 'X' : 'O';
      return {
        history: history.concat({square:curSquare}),
        curStep: state.curStep + 1,
        xIsNext: !state.xIsNext
      };
    case "HISTORY_TRAVEL":
      let index = parseInt(action.index) || 0;
      if(index == state.curStep) return state;
      return {
        ...state,
        curStep: index,
        xIsNext: index%2 == 0
      };
    case "RESET_STATE":
      return initState;
    default:
      return state;
  }
};

export default gameReducer;
webpackJsonp([1],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(26);

var _reactRedux = __webpack_require__(35);

var _gameReducer = __webpack_require__(97);

var _gameReducer2 = _interopRequireDefault(_gameReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SquareView = function SquareView(props) {
  return _react2.default.createElement(
    'button',
    { className: 'square', onClick: props.handleClick },
    props.value
  );
};
var Square = (0, _reactRedux.connect)(function (state, ownProps) {
  return { value: state.history[state.curStep].square[ownProps.index] };
}, function (dispatch, ownProps) {
  return {
    handleClick: function handleClick() {
      dispatch({ type: "SQUARE_CLICK", index: ownProps.index });
    }
  };
})(SquareView);

var Board = function Board() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'board-row' },
      _react2.default.createElement(Square, { index: 0 }),
      _react2.default.createElement(Square, { index: 1 }),
      _react2.default.createElement(Square, { index: 2 })
    ),
    _react2.default.createElement(
      'div',
      { className: 'board-row' },
      _react2.default.createElement(Square, { index: 3 }),
      _react2.default.createElement(Square, { index: 4 }),
      _react2.default.createElement(Square, { index: 5 })
    ),
    _react2.default.createElement(
      'div',
      { className: 'board-row' },
      _react2.default.createElement(Square, { index: 6 }),
      _react2.default.createElement(Square, { index: 7 }),
      _react2.default.createElement(Square, { index: 8 })
    )
  );
};

var GameView = function (_React$Component) {
  _inherits(GameView, _React$Component);

  function GameView() {
    _classCallCheck(this, GameView);

    return _possibleConstructorReturn(this, (GameView.__proto__ || Object.getPrototypeOf(GameView)).apply(this, arguments));
  }

  _createClass(GameView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          status = _props.status,
          history = _props.history,
          handleClear = _props.handleClear,
          jumpTo = _props.jumpTo;

      return _react2.default.createElement(
        'div',
        { className: 'game' },
        _react2.default.createElement(
          'div',
          { className: 'game-board' },
          _react2.default.createElement(Board, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'game-info' },
          _react2.default.createElement(
            'div',
            { onClick: handleClear },
            status
          ),
          _react2.default.createElement(
            'ol',
            null,
            history.map(function (move, step) {
              return _react2.default.createElement(
                'li',
                { key: step },
                _react2.default.createElement(
                  'a',
                  { onClick: jumpTo, 'data-index': step, style: { "cursor": "pointer" } },
                  '#' + step
                )
              );
            })
          )
        )
      );
    }
  }]);

  return GameView;
}(_react2.default.Component);

var Game = (0, _reactRedux.connect)(function (state) {
  var history = state.history.slice();
  var curSquare = history[state.curStep].square;
  var winner = calculateWinner(curSquare);
  var status = winner == null ? 'Next player is ' + (state.xIsNext ? 'X' : 'O') : 'Winner is ' + winner;
  return {
    status: status,
    history: history
  };
}, function (dispatch) {
  return {
    handleClear: function handleClear() {
      dispatch({ type: "RESET_STATE" });
    },
    jumpTo: function jumpTo(e) {
      console.log(e.target.getAttribute("data-index"));
      dispatch({ type: "HISTORY_TRAVEL", index: e.target.getAttribute("data-index") });
    }
  };
})(GameView);

var store = (0, _redux.createStore)(_gameReducer2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(Game, null)
), document.getElementById('root'));

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initState = {
  history: [{ square: new Array(9).fill(null) }],
  curStep: 0,
  xIsNext: true
};

var gameReducer = function gameReducer(state, action) {
  if (!state) state = initState;
  switch (action.type) {
    case "SQUARE_CLICK":
      var history = state.history.slice(0, state.curStep + 1);
      var curSquare = history[history.length - 1].square.slice();
      curSquare[action.index] = state.xIsNext ? 'X' : 'O';
      return {
        history: history.concat({ square: curSquare }),
        curStep: state.curStep + 1,
        xIsNext: !state.xIsNext
      };
    case "HISTORY_TRAVEL":
      var index = parseInt(action.index) || 0;
      return _extends({}, state, {
        curStep: index,
        xIsNext: index % 2 == 0
      });
    case "RESET_STATE":
      return initState;
    default:
      return state;
  }
};

exports.default = gameReducer;

/***/ })

},[223]);
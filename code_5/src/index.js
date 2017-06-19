webpackJsonp([1],{

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * https://discountry.github.io/react/tutorial/tutorial.html#展示每步历史纪录链接
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Square(props) {
  return _react2.default.createElement(
    'button',
    { className: 'square', onClick: function onClick() {
        return props.onClick();
      } },
    props.value
  );
}

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

var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'renderSquare',
    value: function renderSquare(i) {
      var _this2 = this;

      return _react2.default.createElement(Square, {
        value: this.props.square[i],
        onClick: function onClick() {
          return _this2.props.onClick(i);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(0),
          this.renderSquare(1),
          this.renderSquare(2)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(3),
          this.renderSquare(4),
          this.renderSquare(5)
        ),
        _react2.default.createElement(
          'div',
          { className: 'board-row' },
          this.renderSquare(6),
          this.renderSquare(7),
          this.renderSquare(8)
        )
      );
    }
  }]);

  return Board;
}(_react2.default.Component);

var Game = function (_React$Component2) {
  _inherits(Game, _React$Component2);

  function Game() {
    _classCallCheck(this, Game);

    var _this3 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));

    _this3.state = {
      history: [{ square: Array(9).fill(null) }],
      curStep: 0,
      xIsNext: true
    };
    return _this3;
  }

  _createClass(Game, [{
    key: 'jumpTo',
    value: function jumpTo(step) {
      this.setState(function (prevState) {
        return {
          history: prevState.history,
          curStep: step,
          xIsNext: step % 2 == 0 ? true : false
        };
      });
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      this.setState({
        history: [{ square: Array(9).fill(null) }],
        curStep: 0,
        xIsNext: true
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(i) {
      this.setState(function (prevState) {
        var history = prevState.history.slice(0, prevState.curStep + 1);
        var square = history[history.length - 1].square.slice();
        square[i] = prevState.xIsNext ? 'X' : 'O';
        return {
          history: history.concat([{ square: square }]),
          curStep: prevState.curStep + 1,
          xIsNext: !prevState.xIsNext
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var history = this.state.history;
      var curSquare = history[this.state.curStep].square;
      var winner = void 0;
      var status = (winner = calculateWinner(curSquare)) == null ? 'Next player is ' + (this.state.xIsNext ? 'X' : 'O') : 'Winner is ' + winner;
      var moves = history.map(function (move, step) {
        return _react2.default.createElement(
          'li',
          { key: step },
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this4.jumpTo(step);
              }, style: { "cursor": "pointer" } },
            '#' + step
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'game' },
        _react2.default.createElement(
          'div',
          { className: 'game-board' },
          _react2.default.createElement(Board, { square: curSquare, onClick: function onClick(i) {
              return _this4.handleClick(i);
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'game-info' },
          _react2.default.createElement(
            'div',
            { onClick: this.handleClear.bind(this) },
            status
          ),
          _react2.default.createElement(
            'ol',
            null,
            moves
          )
        )
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

// ========================================

_reactDom2.default.render(_react2.default.createElement(Game, null), document.getElementById('root'));

/***/ })

},[222]);
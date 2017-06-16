webpackJsonp([1],{

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = __webpack_require__(26);

var _reactRedux = __webpack_require__(35);

var _todoReducer = __webpack_require__(97);

var _todoReducer2 = _interopRequireDefault(_todoReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodoList = function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        null,
        this.props.items.map(function (item) {
          return _react2.default.createElement(
            'li',
            { key: item.id },
            item.text
          );
        })
      );
    }
  }]);

  return TodoList;
}(_react2.default.Component);

var TodoAppView = function (_React$Component2) {
  _inherits(TodoAppView, _React$Component2);

  function TodoAppView() {
    _classCallCheck(this, TodoAppView);

    return _possibleConstructorReturn(this, (TodoAppView.__proto__ || Object.getPrototypeOf(TodoAppView)).apply(this, arguments));
  }

  _createClass(TodoAppView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          text = _props.text,
          handleChange = _props.handleChange,
          handleAddItem = _props.handleAddItem,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'TodoApp'
        ),
        _react2.default.createElement('input', { type: 'text', value: text, onChange: handleChange }),
        _react2.default.createElement(
          'button',
          { onClick: handleAddItem },
          'Add #' + (items.length + 1)
        ),
        _react2.default.createElement(TodoList, { items: items })
      );
    }
  }]);

  return TodoAppView;
}(_react2.default.Component);

var TodoApp = (0, _reactRedux.connect)(function (state) {
  return {
    text: state.text,
    items: state.items
  };
}, function (dispatch) {
  return {
    handleChange: function handleChange(e) {
      dispatch({ type: 'TODOAPP_INPUT_CHANGE', text: e.target.value });
    },
    handleAddItem: function handleAddItem() {
      dispatch({ type: 'TODOAPP_ADD_ITEM' });
    }
  };
})(TodoAppView);

var store = (0, _redux.createStore)(_todoReducer2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(TodoApp, null)
), document.querySelector('#example'));

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initState = {
  text: '',
  items: []
};

var todoReducer = function todoReducer(state, action) {
  if (!state) state = initState;
  switch (action.type) {
    case 'TODOAPP_INPUT_CHANGE':
      return _extends({}, state, { text: action.text });
    case 'TODOAPP_ADD_ITEM':
      return {
        items: state.items.concat({
          text: state.text,
          id: Date.now()
        }),
        text: ''
      };
    default:
      return state;
  }
};
exports.default = todoReducer;

/***/ })

},[223]);
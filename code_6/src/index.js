webpackJsonp([1],{

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _redux = __webpack_require__(26);

var _reactRedux = __webpack_require__(35);

var _logicList = __webpack_require__(99);

var _calReducer = __webpack_require__(98);

var _calReducer2 = _interopRequireDefault(_calReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DigitView = function DigitView(props) {
  return _react2.default.createElement(
    'span',
    { className: 'cal-digit', onClick: props.digitClick },
    props.digit
  );
};
var Digit = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch, ownProps) {
  return {
    digitClick: function digitClick() {
      dispatch({
        type: "DIGIT_CLICK",
        digit: ownProps.digit
      });
    }
  };
})(DigitView);

var OperatorView = function OperatorView(props) {
  return _react2.default.createElement(
    'span',
    { className: 'cal-operate', onClick: props.operateClick },
    props.operater
  );
};
var Operator = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch, ownProps) {
  return {
    operateClick: function operateClick() {
      dispatch({
        type: "OPERATER_CLICK",
        logic: ownProps.logic,
        operater: ownProps.operater
      });
    }
  };
})(OperatorView);

var FuncBtnView = function FuncBtnView(props) {
  return _react2.default.createElement(
    'span',
    { className: 'cal-funcbtn', onClick: props.funcClick },
    props.funcName
  );
};
var FuncBtn = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch, ownProps) {
  return {
    funcClick: function funcClick() {
      if (!!ownProps.logic) {
        dispatch({
          type: "FUNCTION_CLICK",
          logic: ownProps.logic
        });
      }
    }
  };
})(FuncBtnView);

var CalDisplayView = function CalDisplayView(props) {
  return _react2.default.createElement(
    'div',
    { className: 'cal-display' },
    _react2.default.createElement(
      'span',
      { className: 'cal-dis-opera' },
      props.opera
    ),
    _react2.default.createElement(
      'div',
      { className: 'cal-dis-box' },
      _react2.default.createElement(
        'span',
        { className: 'cal-dis-line' },
        props.lineOne
      ),
      _react2.default.createElement(
        'span',
        { className: 'cal-dis-line' },
        props.lineTwo
      )
    )
  );
};
var CalDisplay = (0, _reactRedux.connect)(function (state) {
  return {
    opera: state.curOpera,
    lineOne: state.num_1,
    lineTwo: state.num_2
  };
}, function (dispatch) {
  return {};
})(CalDisplayView);

var CalculaterView = function CalculaterView(props) {
  return _react2.default.createElement(
    'div',
    { className: 'cal-wrap', tabIndex: '1', onKeyDown: props.onKeyDown },
    _react2.default.createElement(CalDisplay, null),
    _react2.default.createElement(
      'div',
      { className: 'cal-Box' },
      _react2.default.createElement(FuncBtn, { funcName: '' }),
      _react2.default.createElement(FuncBtn, { funcName: '' }),
      _react2.default.createElement(FuncBtn, { funcName: 'C', logic: _logicList.FuncList.reset }),
      _react2.default.createElement(FuncBtn, { funcName: 'EC', logic: _logicList.FuncList.clear })
    ),
    _react2.default.createElement(
      'div',
      { className: 'cal-Box' },
      _react2.default.createElement(Operator, { operater: '^', logic: _logicList.OperateList.pow }),
      _react2.default.createElement(Operator, { operater: '%', logic: _logicList.OperateList.residue }),
      _react2.default.createElement(Operator, { operater: '/', logic: _logicList.OperateList.division }),
      _react2.default.createElement(FuncBtn, { funcName: '<-', logic: _logicList.FuncList.backspace })
    ),
    _react2.default.createElement(
      'div',
      { className: 'cal-Box' },
      _react2.default.createElement(
        'div',
        { className: 'cal-digit-Box' },
        _react2.default.createElement(Digit, { digit: 1 }),
        _react2.default.createElement(Digit, { digit: 2 }),
        _react2.default.createElement(Digit, { digit: 3 }),
        _react2.default.createElement(Digit, { digit: 4 }),
        _react2.default.createElement(Digit, { digit: 5 }),
        _react2.default.createElement(Digit, { digit: 6 }),
        _react2.default.createElement(Digit, { digit: 7 }),
        _react2.default.createElement(Digit, { digit: 8 }),
        _react2.default.createElement(Digit, { digit: 9 }),
        _react2.default.createElement(FuncBtn, { funcName: '+/-', logic: _logicList.FuncList.negative }),
        _react2.default.createElement(Digit, { digit: 0 }),
        _react2.default.createElement(FuncBtn, { funcName: '.', logic: _logicList.FuncList.point })
      ),
      _react2.default.createElement(
        'div',
        { className: 'cal-opera-Box' },
        _react2.default.createElement(Operator, { operater: '*', logic: _logicList.OperateList.multiplication }),
        _react2.default.createElement(Operator, { operater: '-', logic: _logicList.OperateList.subtraction }),
        _react2.default.createElement(Operator, { operater: '+', logic: _logicList.OperateList.addition }),
        _react2.default.createElement(Operator, { operater: '=', logic: null })
      )
    )
  );
};
var Calculater = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch) {
  return {
    onKeyDown: function onKeyDown(e) {
      var dispatchOpts = null;
      switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          dispatchOpts = { type: "DIGIT_CLICK", digit: Number(e.key) };break;
        case "+":
          dispatchOpts = { type: "OPERATER_CLICK", logic: _logicList.OperateList.addition, operater: e.key };break;
        case "-":
          dispatchOpts = { type: "OPERATER_CLICK", logic: _logicList.OperateList.subtraction, operater: e.key };break;
        case "*":
          dispatchOpts = { type: "OPERATER_CLICK", logic: _logicList.OperateList.multiplication, operater: e.key };break;
        case "/":
          dispatchOpts = { type: "OPERATER_CLICK", logic: _logicList.OperateList.division, operater: e.key };break;
        case "%":
          dispatchOpts = { type: "OPERATER_CLICK", logic: _logicList.OperateList.residue, operater: e.key };break;
        case "^":
          dispatchOpts = { type: "OPERATER_CLICK", logic: _logicList.OperateList.pow, operater: e.key };break;
        case "Enter":
          dispatchOpts = { type: "OPERATER_CLICK", logic: null, operater: "=" };break;
        case ".":
          dispatchOpts = { type: "FUNCTION_CLICK", logic: _logicList.FuncList.point };break;
        case "Backspace":
          dispatchOpts = { type: "FUNCTION_CLICK", logic: _logicList.FuncList.backspace };break;
        case "c":
        case "C":
          dispatchOpts = { type: "FUNCTION_CLICK", logic: _logicList.FuncList.reset };break;
        default:
          break;
      }
      dispatchOpts && dispatch(dispatchOpts);
    }
  };
})(CalculaterView);

var store = (0, _redux.createStore)(_calReducer2.default);

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(Calculater, null)
), document.querySelector("#root"));

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initState = {
  num_1: "",
  num_2: "0",
  curOpera: "",
  saveLogic: null,
  edit: false,
  error: 0
};

exports.default = initState;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initState = __webpack_require__(97);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calReducer = function calReducer(state, action) {
  if (!state) state = _initState2.default;
  switch (action.type) {
    case "DIGIT_CLICK":
      if (state.edit === false || state.num_2 === "0") return _extends({}, state, { num_2: "" + action.digit, edit: true });
      return _extends({}, state, {
        num_2: "" + state.num_2 + action.digit,
        edit: true
      });
    case "OPERATER_CLICK":
      if (state.edit === false) {
        if (action.operater === "=") return state;
        if (state.num_1 === "") return _extends({}, state, {
          num_1: state.num_2,
          num_2: "0",
          curOpera: action.operater,
          saveLogic: action.logic
        });
        return _extends({}, state, { curOpera: action.operater, saveLogic: action.logic });
      }

      var result = state.saveLogic !== null ? state.saveLogic(state) : { value: state.num_2, error: 0 };
      if (action.operater === '=') {
        return {
          num_1: "",
          num_2: "" + result.value,
          curOpera: "",
          saveLogic: null,
          edit: false,
          error: result.error
        };
      }

      return {
        num_1: "" + result.value,
        num_2: "0",
        curOpera: action.operater,
        saveLogic: action.logic,
        edit: false,
        error: result.error
      };
    case "FUNCTION_CLICK":
      return action.logic(state);
    default:
      return state;
  }
};

exports.default = calReducer;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FuncList = exports.OperateList = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _initState = __webpack_require__(97);

var _initState2 = _interopRequireDefault(_initState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OperateList = {
  addition: function addition(state) {
    return {
      value: Number(state.num_1) + Number(state.num_2),
      error: 0
    };
  },
  subtraction: function subtraction(state) {
    return {
      value: Number(state.num_1) - Number(state.num_2),
      error: 0
    };
  },
  multiplication: function multiplication(state) {
    return {
      value: Number(state.num_1) * Number(state.num_2),
      error: 0
    };
  },
  division: function division(state) {
    if (Number(state.num_2) === 0) return { value: 0, error: 1 };
    return {
      value: Number(state.num_1) / Number(state.num_2),
      error: 0
    };
  },
  residue: function residue(state) {
    if (Number(state.num_2) === 0) return { value: 0, error: 1 };
    return {
      value: Number(state.num_1) % Number(state.num_2),
      error: 0
    };
  },
  pow: function pow(state) {
    return {
      value: Math.pow(Number(state.num_1), Number(state.num_2)),
      error: 0
    };
  }
};
var FuncList = {
  negative: function negative(state) {
    if (state.num_2 === "0") return state;
    if (state.num_2.indexOf("-") === -1) {
      return _extends({}, state, {
        num_2: "-" + state.num_2
      });
    } else {
      return _extends({}, state, {
        num_2: state.num_2.replace("-", "")
      });
    }
  },
  point: function point(state) {
    if (state.num_2.indexOf(".") !== -1) return state;
    return _extends({}, state, {
      num_2: state.num_2.concat(".")
    });
  },
  backspace: function backspace(state) {
    if (state.edit == false) return state;
    if (state.num_2 === "0") return state;
    var nextNum = state.num_2.slice(0, state.num_2.length - 1);
    if (nextNum === "" || nextNum === "-") nextNum = "0";
    return _extends({}, state, {
      num_2: nextNum
    });
  },
  clear: function clear(state) {
    if (state.edit == false && state.num_2 !== "0") {
      return _extends({}, state, {
        num_2: "0"
      });
    }
    if (state.edit == false) {
      return _extends({}, state, {
        num_1: "",
        num_2: state.num_1,
        curOpera: "",
        saveLogic: null,
        edit: true
      });
    }
    return _extends({}, state, {
      num_2: "0"
    });
  },
  reset: function reset() {
    return _initState2.default;
  }
};

exports.OperateList = OperateList;
exports.FuncList = FuncList;

/***/ })

},[225]);
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { OperateList, FuncList } from './logicList';
import calReducer from './calReducer';


let DigitView = (props) => (
  <span className="cal-digit" onClick={props.digitClick}>
    {props.digit}
  </span>
);
let Digit = connect(
  (state) => ({}),
  (dispatch, ownProps) => ({
    digitClick(){
      dispatch({
        type: "DIGIT_CLICK",
        digit: ownProps.digit
      })
    }
  })
)(DigitView);

let OperatorView = (props) => (
  <span className="cal-operate" onClick={props.operateClick}>
    {props.operater}
  </span>
);
let Operator = connect(
  (state) => ({}),
  (dispatch, ownProps) => ({
    operateClick(){
      dispatch({
        type: "OPERATER_CLICK",
        logic: ownProps.logic,
        operater: ownProps.operater
      })
    }
  })
)(OperatorView);

let FuncBtnView = (props) => (
  <span className="cal-funcbtn" onClick={props.funcClick}>
    {props.funcName}
  </span>
);
let FuncBtn = connect(
  (state) => ({}),
  (dispatch, ownProps) => ({
    funcClick(){
      dispatch({
        type: "FUNCTION_CLICK",
        logic: ownProps.logic
      })
    }
  })
)(FuncBtnView);

let CalDisplayView = (props) => (
  <div className="cal-display">
    <span className="cal-dis-opera">
      {props.opera}
    </span>
    <div className="cal-dis-box">
      <span className="cal-dis-line">{props.lineOne}</span>
      <span className="cal-dis-line">{props.lineTwo}</span>
    </div>
  </div>
);
let CalDisplay = connect(
  (state) => ({
    opera: state.curOpera,
    lineOne: state.num_1,
    lineTwo: state.num_2
  }),
  (dispatch) => ({})
)(CalDisplayView);

let CalculaterView = (props) => (
  <div className="cal-wrap">
    <CalDisplay/>
    <div className="cal-Box">
      <Operator operater={'^'} logic={ OperateList.pow }/>
      <Operator operater={'%'} logic={ OperateList.residue }/>
      <Operator operater={'/'} logic={ OperateList.division }/>
      <FuncBtn funcName={'<-'} logic={ FuncList.backspace }/>
    </div>
    <div className="cal-Box">
      <div className="cal-digit-Box">
        <Digit digit={1}/>
        <Digit digit={2}/>
        <Digit digit={3}/>
        <Digit digit={4}/>
        <Digit digit={5}/>
        <Digit digit={6}/>
        <Digit digit={7}/>
        <Digit digit={8}/>
        <Digit digit={9}/>
        <FuncBtn funcName={'+/-'} logic={ FuncList.negative }/>
        <Digit digit={0}/>
        <FuncBtn funcName={'.'} logic={ FuncList.point }/>
      </div>
      <div className="cal-opera-Box">
        <Operator operater={'*'} logic={ OperateList.multiplication }/>
        <Operator operater={'-'} logic={ OperateList.subtraction }/>
        <Operator operater={'+'} logic={ OperateList.addition }/>
        <Operator operater={'='} logic={ null }/>
      </div>
    </div>
  </div>
);
let Calculater = connect(
  (state) => ({}),
  (dispatch) => ({})
)(CalculaterView);

const store = createStore(calReducer);

render(
  <Provider store={store}>
    <Calculater/>
  </Provider>,
  document.querySelector("#root")
);
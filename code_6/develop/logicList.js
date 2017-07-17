import initState from './initState';

let OperateList = {
  addition (state) {
    return {
      value: Number(state.num_1) + Number(state.num_2),
      error: 0
    }
  },
  subtraction (state) {
    return {
      value: Number(state.num_1) - Number(state.num_2),
      error: 0
    }
  },
  multiplication (state) {
    return {
      value: Number(state.num_1) * Number(state.num_2),
      error: 0
    }
  },
  division (state) {
    if (Number(state.num_2) === 0) return {value: 0, error: 1};
    return {
      value: Number(state.num_1) / Number(state.num_2),
      error: 0
    }
  },
  residue(state) {
    if (Number(state.num_2) === 0) return {value: 0, error: 1};
    return {
      value: Number(state.num_1) % Number(state.num_2),
      error: 0
    }
  },
  pow(state) {
    return {
      value: Math.pow(Number(state.num_1), Number(state.num_2)),
      error: 0
    }
  }
};
let FuncList = {
  negative (state) {
    if(state.num_2 === "0") return state;
    if(state.num_2.indexOf("-") === -1) {
      return {
        ...state,
        num_2: "-" + state.num_2
      }
    } else {
      return {
        ...state,
        num_2: state.num_2.replace("-","")
      }
    }
  },
  point (state) {
    if(state.num_2.indexOf(".") !== -1) return state;
    return {
      ...state,
      num_2: state.num_2.concat(".")
    }
  },
  backspace (state) {
    if(state.edit == false) return state;
    if(state.num_2 === "0") return state;
    let nextNum = state.num_2.slice(0, state.num_2.length-1);
    if(nextNum === "" || nextNum === "-") nextNum = "0";
    return {
      ...state,
      num_2: nextNum
    }
  },
  clear(state){
    if(state.edit == false && state.num_2 !=="0") {
      return {
        ...state,
        num_2: "0"
      }
    }
    if(state.edit == false){
      return {
        ...state,
        num_1: "",
        num_2: state.num_1,
        curOpera: "",
        saveLogic: null,
        edit: true,
      }
    }
    return {
      ...state,
      num_2: "0",
    }
  },
  reset(){
    return initState;
  }

};


export {
  OperateList,
  FuncList
};

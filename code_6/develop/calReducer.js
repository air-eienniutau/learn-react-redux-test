import initState from './initState';

const calReducer = (state, action) => {
  if(!state) state = initState;
  switch (action.type) {
    case "DIGIT_CLICK":
      if(state.edit === false || state.num_2 === "0") return {...state, num_2: "" + action.digit, edit: true};
      return {
        ...state,
        num_2: "" + state.num_2 + action.digit,
        edit: true
      };
    case "OPERATER_CLICK":
      if(state.edit === false){
        if(action.operater === "=") return state;
        if(state.num_1 === "") return {
          ...state,
          num_1: state.num_2,
          num_2: "0",
          curOpera: action.operater,
          saveLogic: action.logic
        };
        return {...state, curOpera: action.operater, saveLogic: action.logic};
      }

      let result = state.saveLogic !== null ?
        state.saveLogic(state) :
        {value: state.num_2, error: 0};
      if(action.operater === '=') {
        return {
          num_1: "",
          num_2: "" + result.value,
          curOpera: "",
          saveLogic: null,
          edit: false,
          error: result.error
        }
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

export default calReducer;

import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const combReducer = combineReducers({
  value: itemReducer,
  list: (list = []) => list
});
const streamReducer = (status, action) => {
  switch (action.type) {
    case 'TODO_ADD_ITEM':
      const item = status.value;
      return { ...status, list: [...status.list,item], value: ''};
    default:
      return status;
  }
};
const reduceReducers = (...reducers) => {
  return (status, action) => {
    let currentStatus = status;
    for(let reducer of reducers){
      currentStatus = reducer(currentStatus, action);
    }
    return currentStatus;
  };
};
const recombineReducers = (reducers) => {
  const fn = combineReducers(reducers);
  return (status, action) => {
    switch (action.type) {
      case "XXXXX":
        return { ...status };
      default:
        return fn(status, action);
    }
  }
};

const rootReducer = reduceReducers(combReducer, streamReducer);

export default rootReducer;
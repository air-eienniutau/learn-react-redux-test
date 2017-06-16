const initState = {
  text: '',
  items: []
};

let todoReducer = (state, action) => {
  if(!state) state = initState;
  switch (action.type){
    case 'TODOAPP_INPUT_CHANGE':
      return {...state, text: action.text};
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
export default todoReducer;
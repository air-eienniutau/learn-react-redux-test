
export default function(value = '', action) {
  switch(action.type) {
    case 'TODO_CHANGE_INPUT':
      return action.data;
    default:
      return value;
  }
}

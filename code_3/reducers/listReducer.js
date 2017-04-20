
export default function(list = [], action) {
  return action.type.includes("ADD") ? [...list, action.item] : list;
}
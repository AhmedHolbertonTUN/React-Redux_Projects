import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: uuidv4(), text: action.data, done: false }
        ]
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id)
      };
    case "EDIT_TASK":
      let index;
      for (let i = 0; i < state.tasks.length; i++)
        if (state.tasks[i].id === action.id) index = i;
      state.tasks[index].text = action.data;
      return {
        ...state,
        tasks: [...state.tasks]
      };
    case "CHECKED":
      let index2;
      for (let i = 0; i < state.tasks.length; i++)
        if (state.tasks[i].id === action.id) index2 = i;
      state.tasks[index2].done = action.status;
      return {
        ...state,
        tasks: [...state.tasks]
      };
    default:
      return state;
  }
};

export default reducer;

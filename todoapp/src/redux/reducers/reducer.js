const init_state = {
  user_data: [],
};
export const TodoReducer = (state = init_state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        user_data: [...state.user_data, action.payload],
      };

      default :
      return state
  }
};

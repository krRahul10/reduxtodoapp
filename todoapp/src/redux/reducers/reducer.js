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

    case "DELETE_DATA":
      const afterDelete = state.user_data.filter(
        (elem, k) => k !== action.payload
      );

      return {
        user_data: afterDelete,
      };

    case "UPDATE_DATA":
      const update_data = state.user_data.map((elem, k) =>
        k == action.d ? action.payload : elem
      );

      return {
        user_data: update_data,
      };

    default:
      return state;
  }
};

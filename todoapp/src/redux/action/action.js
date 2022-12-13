export const Add = (item) => {
  return {
    type:"ADD_DATA",
    payload:item
  };
};

export const RemoveData = (id) => {
    return {
      type:"DELETE_DATA",
      payload:id
    };
  };

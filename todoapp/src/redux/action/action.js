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

  export const UpdateData = (items,id) => {
    return {
      type:"UPDATE_DATA",
      payload:items,
      d:id
    };
  };

const initialState = {
  history: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        history: state.history.concat({ id: Math.random(), age: action.age }),
      };
    case 'DEL_ITEM':
      return {
        ...state,
        history: state.history.filter(el => el.id !== action.key)
      };
    default:
      break;
  }

  return newState;
};

export default reducer;

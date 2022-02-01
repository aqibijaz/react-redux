const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'AGE_UP_ASYNC':
      return {
        ...state,
        age: state.age + action.value,
        // history: state.history.concat({ id: Math.random(), age: state.age + action.value }),
      };
    case 'AGE_DOWN':
      return {
        ...state,
        age: state.age - action.value,
        // history: state.history.concat({ id: Math.random(), age: state.age - action.value }),
      }
    default:
      return state;
  }
};

export default reducer;

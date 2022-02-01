import { combineReducers } from 'redux';

import ageReducer from './ageReducer';
import historyReducer from './historyReducer';

const initialLoadingState = { loading: false };
const loadingReducer = (state = initialLoadingState, action) => {
  let newState = {...state};
  if (action.type === 'LOADING') {
    newState.loading = true;
  }
  if (action.type === 'LOADING_FALSE') {
    newState.loading = false;
  }
  return newState;
};

const reducer = combineReducers({
  ageState: ageReducer,
  historyState: historyReducer,
  loadingState: loadingReducer,
});

export default reducer;
// const initialState = {
//   age: 21,
//   history: [],
// };

// const reducer = (state = initialState, action) => {
//   const newState = { ...state };

//   switch (action.type) {
//     case 'AGE_UP':
//       return {
//         ...state,
//         age: state.age + action.value,
//         history: state.history.concat({ id: Math.random(), age: state.age + action.value }),
//       };
//     case 'AGE_DOWN':
//       return {
//         ...state,
//         age: state.age - action.value,
//         history: state.history.concat({ id: Math.random(), age: state.age - action.value }),
//       }
//     case 'DEL_ITEM':
//       return {
//         ...state,
//         history: state.history.filter(el => el.id !== action.key)
//       };
//     default:
//       break;
//   }

//   return newState;
// };

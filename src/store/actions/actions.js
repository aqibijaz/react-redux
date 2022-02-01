// For Thunk

export const loading = () => {
  return { type: "LOADING" }
}
export const loadingFalse = () => {
  return { type: "LOADING_FALSE" }
}

export const ageUpAsync = (value) => {
  return { type: 'AGE_UP', value };
};
export const ageUp = (value) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(ageUpAsync(value));
      dispatch(loadingFalse());
    }, 2000);
  };
};

export const ageDown = (value) => {
  return { type: 'AGE_DOWN', value };
};

const initialState = {
  counter: 0,
  results: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + action.val
      }
    case 'STORE':
      return {
        ...state,
        results: state.results.concat(state.counter)
      }
  }
  return state;
}

export default reducer;
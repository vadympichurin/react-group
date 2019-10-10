import types from './actionTypes';

const initialCounterState = 100;

const counterReducer = (state = initialCounterState, action) => {
  console.log("Form inside reducer", action);

  switch (action.type) {
    case types.INCREMENT :
      return state + action.payload;

    case types.DECREMENT :
      return state - action.payload;

    case types.RESET :
      return initialCounterState;

    default:
      return state;
  }
};

export default counterReducer;
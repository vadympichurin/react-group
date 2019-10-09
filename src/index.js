import { createStore } from "redux";

// ReactDOM.render(
//   <BrowserRouter>
//     <Route component={App} />
//   </BrowserRouter>,
//   document.querySelector("#root")
// );

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
}

const initialCounterState = 100;

console.dir(createStore);

const reducer = (state = initialCounterState, action) => {
  console.log("Form inside reducer", action);

  switch (action.type) {
    case ACTION_TYPES.INCREMENT :
      return state + action.payload;
    case ACTION_TYPES.DECREMENT :
      return state - action.payload;
    case ACTION_TYPES.RESET :
      return initialCounterState;
    default:
      return state;
  }
  return state;
};

const store = createStore(reducer);

console.log(store.getState());



const incrementAction = {
  type: ACTION_TYPES.INCREMENT,
  payload: 5,
};

const decrementAction = {
  type: ACTION_TYPES.DECREMENT,
  payload: 10,
};

const reset = {
  type: ACTION_TYPES.RESET,
};

store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(decrementAction);
console.log(store.getState());

store.dispatch(reset);
console.log(store.getState());

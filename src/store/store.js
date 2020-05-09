import { createStore } from "redux";
import initialState from "./stateInitial";
import { createReducer } from "@reduxjs/toolkit";
import reducerincrease from "./reducers/reducerincrease";
import reducerdecrease from "./reducers/reducerdecrease";

const reducer = createReducer(initialState, {
  INCREASE: (state, action) => {
    return reducerincrease(state, action);
  },
  DECREASE: (state, action) => {
    return reducerdecrease(state, action);
  },
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

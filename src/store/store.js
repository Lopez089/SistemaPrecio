import { createStore } from "redux";
import initialState from "./stateInitial";
import { createReducer } from "@reduxjs/toolkit";

const reducer = createReducer(initialState, {
  INCREASE: (state, action) => {
    return {
      ...state,
      servicePackages: state.servicePackages.map((object) =>
        object.id === action.id
          ? {
              ...object,
              namePackages: "PERSONALIZED",
              price: object.priceHour * 1 + object.price,
              Service: object.Service.map((prop) =>
                prop.idService === action.idService
                  ? {
                      ...prop,
                      count: prop.count + 1,
                    }
                  : prop
              ),
            }
          : object
      ),
    };
  },
  DECREASE: (state, action) => {
    return {
      ...state,
      servicePackages: state.servicePackages.map((object) =>
        object.id === action.id
          ? {
              ...object,
              namePackages: "PERSONALIZED",
              price: action.priceService - action.priceHour,
              Service: object.Service.map((prop) =>
                prop.idService === action.idService
                  ? {
                      ...prop,
                      count: prop.count === 0 ? 0 : prop.count - 1,
                    }
                  : prop
              ),
            }
          : object
      ),
    };
  },
});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

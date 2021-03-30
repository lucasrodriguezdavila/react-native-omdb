import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import filmsReducer from "./films/reducer";

const DEFAULT_STORE = {
  films: {
    films: [],
  },
};

const rootReducer = combineReducers({
  films: filmsReducer,
});

const store = createStore(rootReducer, DEFAULT_STORE, applyMiddleware(thunk));
export default store;

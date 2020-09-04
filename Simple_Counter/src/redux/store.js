import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger));
console.log(logger);

export default store;

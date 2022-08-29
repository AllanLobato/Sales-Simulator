
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import myFirstReducer from "./ducks/cart";
import mySaga from "./sagas/cart";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ myFirstReducer });
export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
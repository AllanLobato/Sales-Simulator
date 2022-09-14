
import {  createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./ducks"
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
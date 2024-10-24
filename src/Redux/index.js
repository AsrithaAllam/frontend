import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
 
import rootReducer from "./RootReducer";
import rootSaga from "./RootSaga";
 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
 
sagaMiddleware.run(rootSaga);
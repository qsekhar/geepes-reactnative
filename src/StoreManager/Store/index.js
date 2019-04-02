import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../Reducers/index';
import { createLogger } from 'redux-logger';

const ReduxLogger = createLogger({
  collapsed : true,
  diff : true
});

const middlewares = [ReduxThunk, ReduxLogger]


export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../Reducers/index';
import { createLogger } from 'redux-logger';

import { createNetworkMiddleware } from 'react-native-offline';
const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
});

const ReduxLogger = createLogger({
  collapsed : true,
  diff : true
});

const middlewares = [ReduxThunk, ReduxLogger, networkMiddleware]


export default createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
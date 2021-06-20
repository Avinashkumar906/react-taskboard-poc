import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reducer/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer, 
  composeEnhancers(
    applyMiddleware(thunk),
  )
)

// sagaMiddleware.run(rootSaga);

export default store;
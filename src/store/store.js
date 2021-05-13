import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reducer/rootReducer'

const store = createStore(reducer,applyMiddleware(thunk))

// sagaMiddleware.run(rootSaga);

export default store;
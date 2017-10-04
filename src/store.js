import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk'
import postsReducer from './modules/posts'
import messageReducer from './modules/util/message';


const reducer = combineReducers({
  dashboard: postsReducer,
  form: formReducer,
  message: messageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)


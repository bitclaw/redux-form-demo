import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import messageReducer from './reducers/message'
import formReducer from './reducers/message'

const reducer = combineReducers({
    form: formReducer,
    message: messageReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
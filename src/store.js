import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
//import messageReducer from './reducers/message'
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    form: formReducer,
    //message: messageReducer
})

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)
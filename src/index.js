import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import RegisterFormContainer from './RegisterFormContainer';
import registerServiceWorker from './registerServiceWorker';
import store from './store'

ReactDOM.render(
        <Provider store={store}>
            <RegisterFormContainer />
        </Provider>,
        document.getElementById('root'));

registerServiceWorker();

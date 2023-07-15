import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from 'App';
import reportWebVitals from "reportWebVitals";

const root = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    root,
    document.getElementById('root')
);

reportWebVitals();

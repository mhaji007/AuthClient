import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './components/App';
import Welcome from './components/welcome';


ReactDOM.render(
    <BrowserRouter>
    <App>
        <Route path="/" exact component={Welcome}></Route>
    </App>
    </BrowserRouter>
    ,
    document.querySelector('#root')
)
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider}from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Welcome from './components/welcome';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';

const store =createStore(
    reducers,
{
    auth:{authenticated: localStorage.getItem('token')}
},
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App>
        <Route path="/" exact component={Welcome}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/feature" exact component={Feature}></Route>
        <Route path="/Signout" exact component={Signout}></Route>
    </App>
    </BrowserRouter>
    </Provider>
    ,
    document.querySelector('#root')
)
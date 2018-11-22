import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/menu' component = { Menu } />
            <Route exact path = '/signin' component = { App } />
        </div>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

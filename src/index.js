import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Store should be global so we are importing it at highest level component
//i.e in app.js
import {Provider} from 'react-redux'; // provider allow us to inject the global store
//we build the store now
import {createStore} from 'redux';

// import the reducer now that we have created
import reducer from './store/reducer';

const store = createStore(reducer);
// Now we need to pass the store as property to the provider to make it available to the entire application
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

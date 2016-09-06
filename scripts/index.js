import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Main from "./components/main";

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
    	<Main />
  	</Provider>, document.getElementById("main"));


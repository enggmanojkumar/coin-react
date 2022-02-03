import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
		<Router>
			<Switch>
				<Route exact path="/chart/:network/:token">
				</Route>
				<Route exact path="/"><App /></Route>
			</Switch>
		</Router>
	,
	document.getElementById('root')
);

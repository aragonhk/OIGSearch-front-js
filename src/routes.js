import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';

export default (
    <Router history={history}>
            <Route path="/" component={App}/>
    </Router> 
);
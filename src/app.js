import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './pages/home/Home';

class App extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>
), document.getElementById('container'));

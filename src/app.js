import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './pages/home/Home';
import Button from './pages/button/ButtonDemo';
import Icon from './pages/icon/IconDemo';
import Toast from './pages/toast/ToastDemo';
import Cell from './pages/cell/CellDemo';

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
            <Route path="button" component={Button}/>
            <Route path="icons" component={Icon}/>
            <Route path="toast" component={Toast}/>
            <Route path="cell" component={Cell}/>
        </Route>
    </Router>
), document.getElementById('container'));

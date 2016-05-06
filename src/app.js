import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './pages/home/Home';
import Button from './pages/button/ButtonDemo';
import Cell from './pages/cell/CellDemo';
import Form from './pages/form/FormDemo';
import Toast from './pages/toast/ToastDemo';
import Dialog from './pages/dialog/DialogDemo';
import Progress from './pages/progress/ProgressDemo';
import Msg from './pages/msg/MsgDemo';
import Article from './pages/article/ArticleDemo';
import ActionSheet from './pages/actionsheet/ActionSheetDemo';
import Icon from './pages/icon/IconDemo';
import Panel from './pages/panel/PanelDemo';
import TabBar from './pages/tabbar/TabBarDemo';
import NavBar from './pages/navbar/NavBarDemo';
import SearchBar from './pages/searchbar/SearchBarDemo';
import PageNotFound from './pages/error/PageNotFound';

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
            <Route path="cell" component={Cell}/>
            <Route path="form" component={Form}/>
            <Route path="toast" component={Toast}/>
            <Route path="dialog" component={Dialog}/>
            <Route path="progress" component={Progress}/>
            <Route path="msg" component={Msg}/>
            <Route path="article" component={Article}/>
            <Route path="actionsheet" component={ActionSheet}/>
            <Route path="icons" component={Icon}/>
            <Route path="panel" component={Panel}/>
            <Route path="tabbar" component={TabBar}/>
            <Route path="navbar" component={NavBar}/>
            <Route path="searchbar" component={SearchBar}/>
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
), document.getElementById('container'));

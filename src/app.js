import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Home from './pages/home/Home';
import ActionSheet from './pages/actionsheet/ActionSheetDemo';
import Article from './pages/article/ArticleDemo';
import Button from './pages/button/ButtonDemo';
import Cell from './pages/cell/CellDemo';
import Dialog from './pages/dialog/DialogDemo';
import Form from './pages/form/FormDemo';
import Icon from './pages/icon/IconDemo';
import Msg from './pages/msg/MsgDemo';
import NavBar from './pages/navbar/NavBarDemo';
import Panel from './pages/panel/PanelDemo';
import Popup from './pages/popup/PopupDemo';
import Progress from './pages/progress/ProgressDemo';
import Refresh from './pages/refresh/RefreshDemo';
import Scroll from './pages/scroll/ScrollDemo';
import SearchBar from './pages/searchbar/SearchBarDemo';
import TabBar from './pages/tabbar/TabBarDemo';
import Toast from './pages/toast/ToastDemo';
import Shop from './pages/shop/Shop';
import List from './pages/list/ListDemo';
import Banner from './pages/banner/BannerDemo';
import PageNotFound from './pages/error/PageNotFound';

class App extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="hui-page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}
                >
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="actionsheet" component={ActionSheet}/>
            <Route path="article" component={Article}/>
            <Route path="button" component={Button}/>
            <Route path="cell" component={Cell}/>
            <Route path="dialog" component={Dialog}/>
            <Route path="form" component={Form}/>
            <Route path="icons" component={Icon}/>
            <Route path="msg" component={Msg}/>
            <Route path="navbar" component={NavBar}/>
            <Route path="panel" component={Panel}/>
            <Route path="popup" component={Popup}/>
            <Route path="progress" component={Progress}/>
            <Route path="refresh" component={Refresh}/>
            <Route path="scroll" component={Scroll}/>
            <Route path="searchbar" component={SearchBar}/>
            <Route path="tabbar" component={TabBar}/>
            <Route path="toast" component={Toast}/>
            <Route path="shop" component={Shop}/>
            <Route path="list" component={List}/>
            <Route path="banner" component={Banner}/>
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>
), document.getElementById('container'));

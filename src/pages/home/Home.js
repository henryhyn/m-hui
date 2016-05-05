import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Grids } from '../../index';
import IconButton from './icon_nav_button.png';
import IconCell from './icon_nav_cell.png';
import IconToast from './icon_nav_toast.png';
import IconDialog from './icon_nav_dialog.png';
import IconProgress from './icon_nav_progress.png';
import IconMsg from './icon_nav_msg.png';
import IconArticle from './icon_nav_article.png';
import IconActionSheet from './icon_nav_actionSheet.png';
import IconIcons from './icon_nav_icons.png';
import IconPanel from './icon_nav_panel.png';
import IconTab from './icon_nav_tab.png';
import IconSearchBar from './icon_nav_search_bar.png';
import IconRefresh from './icon_nav_ptr.png';
import IconScroll from './icon_nav_up.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [{
                icon: <img src={IconButton}/>,
                label: 'Button',
                href: 'button'
            }, {
                icon: <img src={IconCell}/>,
                label: 'Cell',
                href: 'cell'
            }, {
                icon: <img src={IconToast}/>,
                label: 'Toast',
                href: 'toast'
            }, {
                icon: <img src={IconDialog}/>,
                label: 'Dialog',
                href: 'dialog'
            }, {
                icon: <img src={IconProgress}/>,
                label: 'Progress',
                href: 'progress'
            }, {
                icon: <img src={IconMsg}/>,
                label: 'Msg',
                href: 'msg'
            }, {
                icon: <img src={IconArticle}/>,
                label: 'Article',
                href: 'article'
            }, {
                icon: <img src={IconActionSheet}/>,
                label: 'ActionSheet',
                href: 'actionsheet'
            }, {
                icon: <img src={IconIcons}/>,
                label: 'Icons',
                href: 'icons'
            }, {
                icon: <img src={IconPanel}/>,
                label: 'Panel',
                href: 'panel'
            }, {
                icon: <img src={IconTab}/>,
                label: 'Tab',
                href: 'tab'
            }, {
                icon: <img src={IconSearchBar}/>,
                label: 'SearchBar',
                href: 'searchbar'
            }, {
                icon: <img src={IconRefresh}/>,
                label: 'Refresh',
                href: 'refresh'
            }, {
                icon: <img src={IconScroll}/>,
                label: 'Scroll',
                href: 'scroll'
            }, {
                icon: <img src={IconSearchBar}/>,
                label: 'Popup',
                href: 'popup'
            }]
        };
    }

    render() {
        return (
            <Page>
                <Grids data={this.state.components}/>
            </Page>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

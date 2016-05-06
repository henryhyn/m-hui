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
import IconCalendar from './icon_nav_calendar.png';
import IconCity from './icon_nav_city.png';
import IconDateTime from './icon_nav_datetime.png';
import IconNotify from './icon_nav_noti.png';
import IconPicker from './icon_nav_picker.png';
import IconSelect from './icon_nav_select.png';
import IconSwiper from './icon_nav_swiper.png';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [{
                icon: <img src={IconButton}/>,
                label: '按钮',
                href: 'button'
            }, {
                icon: <img src={IconCell}/>,
                label: 'Cell',
                href: 'cell'
            }, {
                icon: <img src={IconCell}/>,
                label: '表单',
                href: 'form'
            }, {
                icon: <img src={IconToast}/>,
                label: 'Toast',
                href: 'toast'
            }, {
                icon: <img src={IconDialog}/>,
                label: '对话框',
                href: 'dialog'
            }, {
                icon: <img src={IconProgress}/>,
                label: '进度条',
                href: 'progress'
            }, {
                icon: <img src={IconMsg}/>,
                label: 'Msg',
                href: 'msg'
            }, {
                icon: <img src={IconArticle}/>,
                label: '文章',
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
                label: '面板',
                href: 'panel'
            }, {
                icon: <img src={IconTab}/>,
                label: 'Tab',
                href: 'tab'
            }, {
                icon: <img src={IconSearchBar}/>,
                label: '搜索框',
                href: 'searchbar'
            }, {
                icon: <img src={IconRefresh}/>,
                label: '下拉刷新',
                href: 'refresh'
            }, {
                icon: <img src={IconScroll}/>,
                label: '滚动加载',
                href: 'scroll'
            }, {
                icon: <img src={IconPanel}/>,
                label: 'Popup',
                href: 'popup'
            }, {
                icon: <img src={IconCalendar}/>,
                label: '日历',
                href: 'Calendar'
            }, {
                icon: <img src={IconCity}/>,
                label: '城市',
                href: 'city'
            }, {
                icon: <img src={IconDateTime}/>,
                label: '日期时间',
                href: 'datetime'
            }, {
                icon: <img src={IconNotify}/>,
                label: '通知',
                href: 'notify'
            }, {
                icon: <img src={IconPicker}/>,
                label: 'Picker',
                href: 'picker'
            }, {
                icon: <img src={IconSelect}/>,
                label: 'Select',
                href: 'select'
            }, {
                icon: <img src={IconSwiper}/>,
                label: '轮播',
                href: 'swiper'
            }]
        };
    }

    render() {
        return (
            <Page title='HUI Mobile' subTitle='基于 React 开发的移动端轻量 UI 库'>
                <Grids data={this.state.components}/>
            </Page>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

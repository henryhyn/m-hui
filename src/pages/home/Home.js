import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, Grids, Icon } from '../../index';
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
                label: 'Button',
                href: '#button'
            }, {
                icon: <Icon value='success-no-circle' size='medium'/>,
                label: 'Toast',
                href: '#toast'
            }, {
                icon: <img src={IconDialog}/>,
                label: 'Dialog',
                href: '#dialog'
            }, {
                icon: <img src={IconCell}/>,
                label: 'Cell',
                href: '#cell'
            }, {
                icon: <img src={IconToast}/>,
                label: 'Form',
                href: '#form'
            }, {
                icon: <img src={IconPanel}/>,
                label: 'Panel',
                href: '#panel'
            }, {
                icon: <img src={IconArticle}/>,
                label: 'Article',
                href: '#article'
            }, {
                icon: <img src={IconTab}/>,
                label: 'TabBar',
                href: '#tabbar'
            }, {
                icon: <img src={IconTab}/>,
                label: 'NavBar',
                href: '#navbar'
            }, {
                icon: <img src={IconProgress}/>,
                label: 'Progress',
                href: '#progress'
            }, {
                icon: <Icon value='success' size='medium'/>,
                label: 'Msg',
                href: '#msg'
            }, {
                icon: <img src={IconActionSheet}/>,
                label: 'ActionSheet',
                href: '#actionsheet'
            }, {
                icon: <Icon value='waiting-circle' size='medium'/>,
                label: 'Icons',
                href: '#icons'
            }, {
                icon: <Icon value='search' size='medium'/>,
                label: 'SearchBar',
                href: '#searchbar'
            }, {
                icon: <Icon value='download' size='medium'/>,
                label: 'Refresh',
                href: '#refresh'
            }, {
                icon: <img src={IconScroll}/>,
                label: 'Scroll',
                href: '#scroll'
            }, {
                icon: <img src={IconPanel}/>,
                label: 'Popup',
                href: '#popup'
            }, {
                icon: <img src={IconCalendar}/>,
                label: 'Calendar',
                href: '#Calendar'
            }, {
                icon: <img src={IconCity}/>,
                label: 'City',
                href: '#city'
            }, {
                icon: <img src={IconDateTime}/>,
                label: 'DateTime',
                href: '#datetime'
            }, {
                icon: <Icon value='info-circle' size='medium'/>,
                label: 'Notify',
                href: '#notify'
            }, {
                icon: <img src={IconPicker}/>,
                label: 'Picker',
                href: '#picker'
            }, {
                icon: <img src={IconSelect}/>,
                label: 'Select',
                href: '#select'
            }, {
                icon: <img src={IconSwiper}/>,
                label: 'Swiper',
                href: '#swiper'
            }, {
                icon: <Icon value='safe-success' size='medium'/>,
                label: 'Shop',
                href: '#shop'
            }, {
                icon: <Icon value='safe-success' size='medium'/>,
                label: 'List',
                href: '#list'
            }, {
                icon: <Icon value='safe-success' size='medium'/>,
                label: 'Banner',
                href: '#banner'
            }]
        };
    }

    render() {
        return (
            <Page className='home' title='HUI Mobile' subTitle='基于 React 开发的移动端轻量 UI 库'>
                <Grids data={this.state.components}/>
            </Page>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

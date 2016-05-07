import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import {
    NavBar,
    NavBarItem,
    TabBody,
    TabBodyItem,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel
} from '../../index';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.defaultIndex
        };
    }

    handleHeaderClick(idx) {
        this.setState({index: idx});
        if (this.props.onChange) {
            this.props.onChange(idx);
        }
    }

    parseNavBar(children) {
        const navHeaders = [];
        const navContents = [];

        React.Children.map(children, child => {
            const {children, type} = child.props;
            if (child.type === NavBarItem) {
                navHeaders.push(child);
                if (children) {
                    navContents.push(<TabBodyItem children={children}/>);
                }
            } else if (child.type === TabBodyItem) {
                navContents.push(child);
            }
        });

        return {navHeaders, navContents};
    }

    renderNavBar(headers, contents, cls) {
        let _headers = headers.map((item, idx)=> {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });

        let _contents = contents.map((item, idx)=> {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });

        return (
            <div className={cls}>
                <NavBar>
                    {_headers}
                </NavBar>
                <TabBody>
                    {_contents}
                </TabBody>
            </div>
        );
    }

    parseTabBar(children) {
        const tabHeaders = [];
        const tabContents = [];

        React.Children.map(children, child => {
            const {children, type} = child.props;
            if (child.type === TabBarItem) {
                tabHeaders.push(child);
                if (children) {
                    tabContents.push(<TabBodyItem children={children}/>);
                }
            } else if (child.type === TabBodyItem) {
                tabContents.push(child);
            }
        });

        return {tabHeaders, tabContents};
    }

    renderTabBar(headers, contents, cls) {
        let _headers = headers.map((item, idx)=> {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });

        let _contents = contents.map((item, idx)=> {
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });

        return (
            <div className={cls}>
                <TabBody>
                    {_contents}
                </TabBody>
                <TabBar>
                    {_headers}
                </TabBar>
            </div>
        );
    }

    render() {
        const { className, type, children } = this.props;
        const cls = classNames({
            'hui-tab': true
        }, className);

        switch (type) {
            case 'tabbar':
                const {tabHeaders, tabContents} = this.parseTabBar(children);
                return this.renderTabBar(tabHeaders, tabContents, cls);
                break;
            case 'navbar':
                const {navHeaders, navContents} = this.parseNavBar(children);
                return this.renderNavBar(navHeaders, navContents, cls);
                break;
            default:
                return (
                    <div className={cls} {...this.props}>
                        {children}
                    </div>
                );
                break;
        }
    }
}

Tab.propTypes = {
    type: PropTypes.string,
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func
};

Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};

export default Tab;

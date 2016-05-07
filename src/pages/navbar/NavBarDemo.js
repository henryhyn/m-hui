import React, { Component, PropTypes } from 'react';
import {
    Page,
    Tab,
    NavBarItem,
    NavBarIcon,
    NavBarLabel,
    Article
} from '../../index';

import IconButton from '../home/icon_nav_button.png';
import IconMsg from '../home/icon_nav_msg.png';
import IconArticle from '../home/icon_nav_article.png';

class NavBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tab type="navbar">
                <NavBarItem label="微信">
                    <Article>
                        <h1>选项页1</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>

                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
                <NavBarItem label="天空">
                    <Article>
                        <h1>选项页2</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>

                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
                <NavBarItem label="宇宙">
                    <Article>
                        <h1>选项页3</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>

                                <p>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                            </section>
                        </section>
                    </Article>
                </NavBarItem>
            </Tab>
        );
    }
}

NavBarDemo.propTypes = {};

NavBarDemo.defaultProps = {};

export default NavBarDemo;

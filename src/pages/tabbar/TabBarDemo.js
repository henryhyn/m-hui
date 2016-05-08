import React, { Component, PropTypes } from 'react';
import {
    Page,
    Tab,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} from '../../index';

import IconButton from '../home/icon_nav_button.png';
import IconMsg from '../home/icon_nav_msg.png';
import IconArticle from '../home/icon_nav_article.png';

class TabBarDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconButton}/>} label="微信">
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
                </TabBarItem>
                <TabBarItem icon={<img src={IconMsg}/>} label="天空">
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
                </TabBarItem>
                <TabBarItem icon={<img src={IconArticle}/>} label="宇宙">
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
                </TabBarItem>
            </Tab>
        );
    }
}

TabBarDemo.propTypes = {};

TabBarDemo.defaultProps = {};

export default TabBarDemo;

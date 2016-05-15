import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, List, ListItem, Banner, LazyLoad } from '../../index';

class BannerDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <List>
                    <ListItem>
                        <Banner>
                            <div className="hui-banner-hd">
                                <LazyLoad className="hui-img-wrap rate56 mask20">
                                    <img src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                                </LazyLoad>

                                <div className="hui-caption">
                                    <h4 className="hui-title">大块头有大美味</h4>

                                    <p className="hui-subtitle">鱼头终极吃法大公开</p>
                                </div>
                            </div>
                        </Banner>
                    </ListItem>
                    <ListItem>
                        <Banner>
                            <div className="hui-banner-hd">
                                <LazyLoad className="hui-img-wrap rate56 mask20">
                                    <img src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                                </LazyLoad>

                                <div className="hui-caption">
                                    <h4 className="hui-title">大块头有大美味</h4>

                                    <p className="hui-subtitle">鱼头终极吃法大公开</p>
                                </div>
                            </div>
                        </Banner>
                    </ListItem>
                    <ListItem>
                        <Banner>
                            <div className="hui-banner-hd">
                                <LazyLoad className="hui-img-wrap rate56 mask20">
                                    <img src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                                </LazyLoad>

                                <div className="hui-caption">
                                    <h4 className="hui-title">大块头有大美味</h4>

                                    <p className="hui-subtitle">鱼头终极吃法大公开</p>
                                </div>
                            </div>
                        </Banner>
                    </ListItem>
                    <ListItem>
                        <Banner>
                            <div className="hui-banner-hd">
                                <LazyLoad className="hui-img-wrap rate56 mask20">
                                    <img src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                                </LazyLoad>

                                <div className="hui-caption">
                                    <h4 className="hui-title">大块头有大美味</h4>

                                    <p className="hui-subtitle">鱼头终极吃法大公开</p>
                                </div>
                            </div>
                        </Banner>
                    </ListItem>
                </List>
            </Page>
        );
    }
}

BannerDemo.propTypes = {};

BannerDemo.defaultProps = {};

export default BannerDemo;

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, List, ListItem, LazyLoad, MediaBox, MediaBoxTitle, MediaBoxDescription, MediaBoxInfo, MediaBoxInfoMeta, Icon, Banner } from '../../index';

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
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
                    <div className="hui-banner-bd">
                        <p>
                            说到鱼头，喜欢吃的人爱死，不喜欢吃的人嫌弃死。别小看这鱼头，它不仅口味好还富含人体必需的卵磷脂和不饱和脂肪酸，对降低血脂、健脑及延缓衰老有好处。别再愁今天晚上吃什么了，来个超美味的鱼头吃吧！
                        </p>
                    </div>
                </Banner>

                <List>
                    <ListItem>
                        <LazyLoad className="hui-img-wrap rate48">
                            <img className="hui-media-appmsg-thumb"
                                 src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                        </LazyLoad>
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>
                            最经典也是最受欢迎的剁椒鱼头
                        </MediaBoxTitle>
                        <MediaBoxDescription>
                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </MediaBoxDescription>
                        <MediaBoxInfo style={{marginTop: '12px'}}>
                            <MediaBoxInfoMeta><Icon value='location'
                                                    style={{marginRight: '3px'}}/>通河/泗塘</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta>望湘园</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta extra>3.5km</MediaBoxInfoMeta>
                        </MediaBoxInfo>
                    </ListItem>
                    <ListItem>
                        <LazyLoad className="hui-img-wrap rate48">
                            <img className="hui-media-appmsg-thumb"
                                 src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                        </LazyLoad>
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>
                            最经典也是最受欢迎的剁椒鱼头
                        </MediaBoxTitle>
                        <MediaBoxDescription>
                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </MediaBoxDescription>
                        <MediaBoxInfo style={{marginTop: '12px'}}>
                            <MediaBoxInfoMeta><Icon value='location'
                                                    style={{marginRight: '3px'}}/>通河/泗塘</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta>望湘园</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta extra>3.5km</MediaBoxInfoMeta>
                        </MediaBoxInfo>
                    </ListItem>
                    <ListItem>
                        <LazyLoad className="hui-img-wrap rate48">
                            <img className="hui-media-appmsg-thumb"
                                 src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                        </LazyLoad>
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>
                            最经典也是最受欢迎的剁椒鱼头
                        </MediaBoxTitle>
                        <MediaBoxDescription>
                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </MediaBoxDescription>
                        <MediaBoxInfo style={{marginTop: '12px'}}>
                            <MediaBoxInfoMeta><Icon value='location'
                                                    style={{marginRight: '3px'}}/>通河/泗塘</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta>望湘园</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta extra>3.5km</MediaBoxInfoMeta>
                        </MediaBoxInfo>
                    </ListItem>
                    <ListItem>
                        <LazyLoad className="hui-img-wrap rate48">
                            <img className="hui-media-appmsg-thumb"
                                 src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                        </LazyLoad>
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>
                            最经典也是最受欢迎的剁椒鱼头
                        </MediaBoxTitle>
                        <MediaBoxDescription>
                            由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                        </MediaBoxDescription>
                        <MediaBoxInfo style={{marginTop: '12px'}}>
                            <MediaBoxInfoMeta><Icon value='location'
                                                    style={{marginRight: '3px'}}/>通河/泗塘</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta>望湘园</MediaBoxInfoMeta>
                            <MediaBoxInfoMeta extra>3.5km</MediaBoxInfoMeta>
                        </MediaBoxInfo>
                    </ListItem>
                </List>
            </Page>
        );
    }
}

ListDemo.propTypes = {};

ListDemo.defaultProps = {};

export default ListDemo;

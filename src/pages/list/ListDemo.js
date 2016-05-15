import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page, List, ListItem, LazyLoad, MediaBoxTitle, MediaBoxDescription, MediaBoxInfo, MediaBoxInfoMeta, Icon } from '../../index';

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <List>
                    <ListItem>
                        <LazyLoad className="hui-img-wrap rate48">
                            <img className="hui-media-appmsg-thumb"
                                 src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED"/>
                        </LazyLoad>
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>最经典也是最受欢迎的剁椒鱼头</MediaBoxTitle>
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
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>最经典也是最受欢迎的剁椒鱼头</MediaBoxTitle>
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
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>最经典也是最受欢迎的剁椒鱼头</MediaBoxTitle>
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
                        <MediaBoxTitle style={{marginTop: '8px', marginBottom: '3px'}}>最经典也是最受欢迎的剁椒鱼头</MediaBoxTitle>
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

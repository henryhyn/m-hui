import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazy-load';
import {
    Page,
    Panel,
    PanelBody,
    MediaBox,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Star,
    Mark
} from '../../index';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <Panel>
                    <PanelBody>
                        <MediaBox type="appmsg" href="javascript:void(0);">
                            <LazyLoad className="hui-media-hd hui-media-lg">
                                <img className="hui-media-appmsg-thumb"
                                     src="http://7xqj76.com1.z0.glb.clouddn.com/Fg--qJ1KdSMToDgI1ady3YjRd3ED?imageView2/1/w/120/h/90/q/100"/>
                            </LazyLoad>
                            <MediaBoxBody>
                                <MediaBoxTitle>爽辣重庆潮人火锅<Mark type='cu'/><Mark/></MediaBoxTitle>
                                <MediaBoxInfo style={{marginBottom: '3px'}}>
                                    <MediaBoxInfoMeta><Star rank={45}/></MediaBoxInfoMeta>
                                    <MediaBoxInfoMeta>¥25/人</MediaBoxInfoMeta>
                                </MediaBoxInfo>
                                <MediaBoxDescription>
                                    由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
                                </MediaBoxDescription>
                                <MediaBoxInfo style={{marginTop: '3px'}}
                                              data={[{label: '中山公园'}, {label: '火锅'}, {label: '3.5km', extra: true}]}>
                                </MediaBoxInfo>
                            </MediaBoxBody>
                        </MediaBox>
                    </PanelBody>
                </Panel>
            </Page>
        );
    }
}

Shop.propTypes = {};

Shop.defaultProps = {};

export default Shop;

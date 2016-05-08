import './grid.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Grid } from '../../index';

/**
 * 九宫格
 * @param {array} data - 用于渲染的数据, 一般包含 {icon, label, href} 三个数据, 默认 []
 */
class Grids extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderData(data) {
        return data.map((item, i)=> {
            return <Grid key={i} icon={item.icon} label={item.label} {...item}/>;
        });
    }

    render() {
        const { className, data, children } = this.props;
        const cls = classNames({
            'hui-grids': true
        }, className);

        return (
            <div className={cls} {...this.props}>
                {data.length > 0 ? this.renderData(data) : children}
            </div>
        );
    }
}

Grids.propTypes = {
    data: PropTypes.array
};

Grids.defaultProps = {
    data: []
};

export default Grids;

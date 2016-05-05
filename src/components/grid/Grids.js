import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Grid } from '../../index';

class Grids extends Component {
    renderData(data) {
        return data.map((item, i)=> {
            return <Grid key={i} icon={item.icon} label={item.label} {...item}/>;
        });
    }

    render() {
        const { data, children } = this.props;
        return (
            <div>
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

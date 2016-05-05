import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class GridIcon extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

GridIcon.propTypes = {};
GridIcon.defaultProps = {};

export default GridIcon;

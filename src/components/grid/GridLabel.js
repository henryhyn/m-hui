import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class GridLabel extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>{children}</div>
        );
    }
}

GridLabel.propTypes = {};
GridLabel.defaultProps = {};

export default GridLabel;

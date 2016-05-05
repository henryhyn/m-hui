import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Cells extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, access, children } = this.props;
        const cls = classNames({
            'hui-cells': true,
            'hui-cells-access': access
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

Cells.propTypes = {};

Cells.defaultProps = {};

export default Cells;

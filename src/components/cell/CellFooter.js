import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Cell Footer
 *
 * 用法: <CellFooter>文本</CellFooter>
 */
class CellFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-cell-ft': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

CellFooter.propTypes = {};

CellFooter.defaultProps = {};

export default CellFooter;

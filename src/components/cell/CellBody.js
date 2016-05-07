import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Cell Body
 *
 * 用法: <CellBody></CellBody>
 */
class CellBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-cell-bd': true,
            'hui-cell-primary': true
        }, className);

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
}

CellBody.propTypes = {};

CellBody.defaultProps = {};

export default CellBody;

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderData(data) {
        return data.map((item, i) => {
            return <option
                key={i}
                value={item.value}
                {...item}
                >
                {item.label}
            </option>;
        });
    }

    render() {
        const { className, data, children } = this.props;
        const cls = classNames({
            'hui-select': true
        }, className);

        return (
            <select className={cls} {...this.props}>
                {data.length > 0 ? this.renderData(data) : children}
            </select>
        );
    }
}

Select.propTypes = {
    data: PropTypes.array
};

Select.defaultProps = {
    data: []
};

export default Select;

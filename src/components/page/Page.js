import './page.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 遮罩层
 * @param {bool} transparent - 是否透明, 默认 false
 */
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderPageHeader(title, subTitle) {
        return (
            <div className='hui-page-hd'>
                {title ? <h1 className='title'>{title}</h1> : false}

                {subTitle ? <p className='sub-title'>{subTitle}</p> : false}
            </div>
        );
    }

    render() {
        const { className, title, subTitle, spacing, children } = this.props;
        const cls = classNames({
            'hui-page-bd': true,
            'spacing': spacing
        });

        return (
            <div className={`hui-page ${className ? className : ''}`}>
                {title || subTitle ? this.renderPageHeader(title, subTitle) : false}
                <div className={cls}>
                    {children}
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    spacing: PropTypes.bool
};

Page.defaultProps = {
    title: '',
    subTitle: '',
    spacing: false
};

export default Page;

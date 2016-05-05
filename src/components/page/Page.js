require('./page.less');
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, title, subTitle, spacing, children } = this.props;
        const cls = classNames({
            'hui-page-body': true,
            'spacing': spacing
        }, className);

        return (
            <div className='hui-page' {...this.props}>
                <div className='hui-page-header'>
                    {title ? <h1 className='title'>{title}</h1> : false}

                    {subTitle ? <p className='sub-title'>{subTitle}</p> : false}
                </div>
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
    title: false,
    subTitle: false,
    spacing: false
};

export default Page;

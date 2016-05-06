import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Page } from '../../index';

class ArticleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page title='Article'>开发中, 敬请期待...</Page>
        );
    }
}

ArticleDemo.propTypes = {};

ArticleDemo.defaultProps = {};

export default ArticleDemo;

import './article.less';
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * 文章
 *
 * 用法: <Article>内容</Article>
 */
class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { className, children } = this.props;
        const cls = classNames({
            'hui-article': true
        }, className);

        return (
            <article className={cls} {...this.props}>
                {children}
            </article>
        );
    }
}

Article.propTypes = {};

Article.defaultProps = {};

export default Article;

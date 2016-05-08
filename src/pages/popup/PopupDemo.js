import React, { Component, PropTypes } from 'react';
import { Page, Button, Popup, Article } from '../../index';

class PopupDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    show() {
        this.setState({show: true});
    }

    hide() {
        this.setState({show: false});
    }

    render() {
        return (
            <Page title="Popup" spacing>
                <Button onClick={this.show.bind(this)}>Popup</Button>
                <Popup show={this.state.show} onRequestClose={this.hide.bind(this)}>
                    <Article>
                        <h1>大标题</h1>
                        <section>
                            <h2 className="title">章标题</h2>
                            <section>
                                <h3>1.1 节标题</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                            <section>
                                <h3>1.2 节标题</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </section>
                        </section>
                    </Article>
                </Popup>
            </Page>
        );
    }
}

export default PopupDemo;

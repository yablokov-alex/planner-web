import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Header from '../Navigation/Header/Header';
import Sidebar from '../Navigation/Sidebar/Sidebar';
import SvgContainer from '../SvgContainer/SvgContainer';

import { Scrollbars } from 'react-custom-scrollbars';

import './Layout.scss';

class Layout extends Component {
    
    state = {
        showMenu: false,
        showSidebar: true
    }

    componentDidMount() {
        this.props.onFetchTasks();
    }

    menuClosedHandler = () => {
        this.setState((prevState) => {
            return { showMenu: !prevState.showMenu };
        });
    }

    sidebarClickHandler = () => {
        this.setState((prevState) => {
            return { showSidebar: !prevState.showSidebar };
        });
    }

    render() {
        let wrapperClasses = ['content'];
        if (!this.state.showSidebar) {
            wrapperClasses.push('active');
        }

        return (
            <>
                <SvgContainer />
                <div className="wrapper">
                    <Header title="Главная"
                        showMenu={this.state.showMenu}
                        showSidebar={this.state.showSidebar}
                        menuClosed={this.menuClosedHandler} />

                    <div className={wrapperClasses.join(' ')}>
                        <Sidebar
                            click={this.sidebarClickHandler} />
                        <main className="main">
                            <Scrollbars>
                                <div className="container">
                                    {this.props.children}
                                </div>
                            </Scrollbars>
                        </main>
                    </div>

                </div>
            </>
        );
    };
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchTasks: () => dispatch(actions.fetchTasks())
	}
};

export default connect(null, mapDispatchToProps)(Layout);
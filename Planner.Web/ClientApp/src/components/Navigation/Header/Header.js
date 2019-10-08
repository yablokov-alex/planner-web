import React, { Component } from 'react';
import './Header.scss';
import profilePhoto from '../../../asserts/pic/profile-photo.jpg';

class Header extends Component {
    handleClickOutside = (event) => {
        if (this.props.showMenu && !event.target.closest('.js-btn-profile') && !event.target.closest('.js-drop-profile')) {
            this.props.menuClosed();
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    render() {
        let attachedClasses = ['header__profile-drop', 'js-drop-profile'];
        if (this.props.showMenu) {
            attachedClasses.push('active');
        }

        let headerClasses = ['header'];
        if (!this.props.showSidebar) {
            headerClasses.push('active');
        }

        return (
            <header className={headerClasses.join(' ')}>
                <div className="header__profile">
                    <div className="header__profile-inner js-btn-profile" onClick={this.props.menuClosed}>
                        <div className="header__profile-img">
                            <img src={profilePhoto} alt="" />
                        </div>
                        <div className="header__profile-name">
                            <span>Ангелина</span>
                        </div>
                    </div>
                    <div className={attachedClasses.join(' ')}>
                        <div className="header__profile-row">
                            <a href="/" className="header__profile-link">
                                <svg className="icon-settings">
                                    <use xlinkHref="#settings"></use>
                                </svg>
                                <span>Настройки</span>
                            </a>
                        </div>
                        <div className="header__profile-row">
                            <a href="/" className="header__profile-link">
                                <svg className="icon-power-button">
                                    <use xlinkHref="#power-button"></use>
                                </svg>
                                <span>Выход</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header__title">{this.props.title}</div>
                <div className="header__controll">
                    <div className="header__refresh">
                        <a href="/">
                            <svg className="icon-refresh">
                                <use xlinkHref="#refresh"></use>
                            </svg>
                        </a>
                    </div>
                    <div className="header__notification">
                        <a href="/">
                            <svg className="icon-alarm">
                                <use xlinkHref="#alarm"></use>
                            </svg>
                            <span>2</span>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;
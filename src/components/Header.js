import React, { createRef } from 'react';
import '../Styles/Header.sass'
import blackLogo from '../logo/blackLogo.png'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    state = {
        hamburgerClass: 'hamburger hamburgerDisabled',
        hamburgerActive: false,
    }

    sidebar = createRef();

    handleEscapePress = (e) => {
        if (e.keyCode === 27) {
            this.setState({
                hamburgerClass: 'hamburger hamburgerDisabled',
                hamburgerActive: false
            })
        };
    }

    handleEscapeClick = (e) => {
        if (e.screenX < (window.innerWidth - this.sidebar.current.clientWidth)) {
            this.setState({
                hamburgerClass: 'hamburger hamburgerDisabled',
                hamburgerActive: false
            })
        }
    };

    handleClick = () => {
        if (this.state.hamburgerClass === 'hamburger hamburgerDisabled') {
            document.addEventListener('keydown', (e) => this.handleEscapePress(e));
            document.addEventListener('click', (e) => this.handleEscapeClick(e));
            this.setState({
                hamburgerClass: 'hamburger hamburgerActive',
                hamburgerActive: !this.state.hamburgerActive
            })
        } else if (this.state.hamburgerClass === 'hamburger hamburgerActive') {
            this.setState({
                hamburgerClass: 'hamburger hamburgerDisabled',
                hamburgerActive: !this.state.hamburgerActive
            })
        }
    }

    // handleNavLinkClick = () => {
    //     this.setState({
    //         hamburgerClass: 'hamburger hamburgerDisabled',
    //         hamburgerActive: false
    //     })
    // }

    render() {

        return (
            <div className='headerComponent' >
                <button onClick={this.handleClick} className={this.state.hamburgerClass}>
                    <span className="hamburgerBox">
                        <span className="hamburgerInner"></span>
                    </span>
                </button>
                <div className="logo">
                    <img src={blackLogo} alt="" />
                </div>
                <div className='headerBackground'></div>
                <NavLink to='/' exact>
                    <div className="homeButton">
                        <i href="#" className="fa fa-home"></i>
                    </div>
                </NavLink>
                <div ref={this.sidebar} className={this.state.hamburgerActive ? 'sidebar sidebarActive' : 'sidebar'}>
                    <nav className='navigation'>
                        <ul className='navList'>
                            <NavLink to='/' onClick={this.handleClick} exact><li>Home</li></NavLink>
                            <NavLink to='/programme' onClick={this.handleClick} exact><li>Programme</li></NavLink>
                            <NavLink to='/about' onClick={this.handleClick} exact><li>About</li></NavLink>
                            <NavLink to='/archive' onClick={this.handleClick} exact><li>Archive</li></NavLink>
                            <NavLink to='/gallery' onClick={this.handleClick} exact><li>Gallery</li></NavLink>
                            <NavLink to='/artists' onClick={this.handleClick} exact><li>Artists</li></NavLink>
                            <NavLink to='/staff' onClick={this.handleClick} exact><li>Staff & Contact</li></NavLink>
                        </ul>
                        <ul className='socialList'>
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="fa fa-youtube"> </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"> </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a>
                            <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"> </a>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;

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

    handleClick = (a) => {
        if (this.state.hamburgerClass !== 'hamburger hamburgerActive') {
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
            a !== 0 && window.scrollTo(0, 0);
        }
    }

    handleHamburgerHover = () => {
        if (this.state.hamburgerClass === 'hamburger hamburgerDisabled') {
            this.setState({
                hamburgerClass: 'hamburger hamburgerDisabled hamburgerDisabledHover'
            })
        }
    }

    handleHamburgerMouseLeave = () => {
        if (this.state.hamburgerClass === 'hamburger hamburgerDisabled hamburgerDisabledHover') {
            this.setState({
                hamburgerClass: 'hamburger hamburgerDisabled'
            })
        }
    }

    // handleNavLinkClick = () => {
    //     this.setState({
    //         hamburgerClass: 'hamburger hamburgerDisabled',
    //         hamburgerActive: false
    //     })
    // }

    // hamburgerHoverFunc

    // componentDidMount(e) {
    //     window.addEventListener('mouseover', (e) => console.log(e.target))
    // }

    render() {
        return (
            <div className='headerComponent' >
                <div id="headerContainer">
                    <div id="homeHamburger">
                        <NavLink to='/' exact>
                            <div className="homeButton" onClick={() => window.scrollTo(0, 0)}>
                                <i href="#" className="fa fa-home"></i>
                            </div>
                        </NavLink>
                        <div onClick={() => this.handleClick(0)} className={this.state.hamburgerClass} onMouseEnter={this.handleHamburgerHover} onMouseLeave={this.handleHamburgerMouseLeave}>
                            <span className="hamburgerBox">
                                <span className={this.state.hamburgerClass === 'hamburger hamburgerDisabled hamburgerDisabledHover' ? 'hamburgerInnerHover' : 'hamburgerInner'}></span>
                            </span>
                        </div>

                    </div>
                    <div className="logo">
                        <img src={blackLogo} alt="" />
                    </div>
                    <div className='headerBackground'></div>
                </div>
                <div ref={this.sidebar} className={this.state.hamburgerActive ? 'sidebar sidebarActive' : 'sidebar'}>
                    <nav className='navigation'>
                        <ul className='navList'>
                            <NavLink to='/' onClick={this.handleClick} exact><li>Home</li></NavLink>
                            <NavLink to='/programme' onClick={this.handleClick} exact><li>Programme</li></NavLink>
                            <NavLink to='/about' onClick={this.handleClick} exact><li>About</li></NavLink>
                            <NavLink to='/archive' onClick={this.handleClick} exact><li>History</li></NavLink>
                            <NavLink to='/gallery' onClick={this.handleClick} exact><li>Gallery</li></NavLink>
                            <NavLink to='/artists' onClick={this.handleClick} exact><li>Artists</li></NavLink>
                            <NavLink to='/staff' onClick={this.handleClick} exact><li>Staff & Contact</li></NavLink>
                        </ul>
                        <ul className='socialList'>
                            <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="fa fa-youtube"> </a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"> </a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="fa fa-instagram"> </a></li>
                            <li><a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"> </a></li>
                        </ul>
                    </nav>
                </div>
            </div >
        );
    }
}

export default Header;

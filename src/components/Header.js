import React from 'react';
import '../Styles/Header.sass'
import blackLogo from '../logo/blackLogo.png'
import whiteLogo from '../logo/whiteLogo.png'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
    state = {
        hamburgerClass: 'hamburger hamburgerDisabled',
        hamburgerActive: false
    }

    handleEscapePress = (e) => {
        if (e.keyCode === 27) {
            this.setState({
                hamburgerClass: 'hamburger hamburgerDisabled',
                hamburgerActive: false
            })
        };
    }

    handleEscapeClick = (e) => {
        console.log(e.target.className);
        // if (e.keyCode === 27) {
        //     this.setState({
        //         hamburgerClass: 'hamburger hamburgerDisabled',
        //         hamburgerActive: false
        //     })
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
                <div className={this.state.hamburgerActive ? 'sidebar sidebarActive' : 'sidebar'}>
                    <nav>
                        <ul className='navList'>
                            <NavLink to='/' exact><li>Home</li></NavLink>
                            <NavLink to='/programme' exact><li>Programme</li></NavLink>
                            <NavLink to='/about' exact><li>About</li></NavLink>
                            <NavLink to='/archive' exact><li>Archive</li></NavLink>
                            <NavLink to='/gallery' exact><li>Gallery</li></NavLink>
                            <NavLink to='/artists' exact><li>Artists</li></NavLink>
                            <NavLink to='/staff' exact><li>Staff & Contact</li></NavLink>
                        </ul>
                        <ul className='socialList'>
                            <li><a href="#" className="fa fa-youtube"></a></li>
                            <li><a href="#" className="fa fa-facebook"></a></li>
                            <li><a href="#" className="fa fa-instagram"></a></li>
                            <li><a href="#" className="fa fa-twitter"></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;

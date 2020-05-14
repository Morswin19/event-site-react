import React from 'react';
import Contact from './Contact'
import Media from './Media'
import SiteInfo from './SiteInfo'
import Social from './Social'
import '../Styles/Footer.sass'

const Footer = () => {
    return (
        <>
            <div className="socialFooter">
                <Social />
            </div>
            <div className="footerContainer">
                <div className="footerItem">
                    <Media />
                </div>
                <div className="footerItem contactMediaContainer">
                    <Contact />
                    <SiteInfo />
                </div>
            </div>
        </>
    );
}

export default Footer;
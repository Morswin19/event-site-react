import React from 'react';
import '../Styles/Media.sass'
import logo1 from '../logo/logo1.png'
import logo2 from '../logo/logo2.png'
import logo3 from '../logo/logo3.png'
import logo4 from '../logo/logo4.png'
import logo5 from '../logo/logo5.png'
import logo6 from '../logo/logo6.png'
import logo7 from '../logo/logo7.png'

const Media = () => {
    return (
        <div className="footerElement mediaContainer">
            <p>Organizer:</p>
            <div>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
            </div>
            <p>Patronage:</p>
            <div>
                <img src={logo4} alt="" />
            </div>
            <p>Patrons:</p>
            <div>
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo1} alt="" />
            </div>
            <p>Media:</p>
            <div className='mediaLogos'>
                <img src={logo4} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
                <img src={logo7} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                {/* <img src={logo3} alt="" /> */}
                {/* <img src={logo4} alt="" /> */}
            </div>
        </div>
    );
}

export default Media;

import React from 'react';
import '../Styles/Contact.sass'

const Contact = () => {
    return (
        <div className="footerElement contact">
            <h3>CONTACT</h3>
            <ul>
                <li>PK FESTIVAL</li>
                <li>Phillips Avenue 12</li>
                <li>20-007 Boston, MA</li>
            </ul>
            <ul>
                <li>Tel: +48 508 832 713</li>
                <li>Fax: +48 98 510 100 100</li>
                <li>E-mail: <a href="mailto:piotr.kalman85@gmail.com">piotr.kalman85@gmail.com</a></li>
            </ul>
        </div>
    );
}

export default Contact;

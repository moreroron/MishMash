import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <img src={require('../../assets/logo_bo.svg')} alt="background" width='55rem' />
            <span className="logos-sep"></span>
            <img src={require('../../assets/logo_alt.svg')} alt="background" width='55rem' />
        </div>
    )
}

export default Footer
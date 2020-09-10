import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import './Home.scss';
import { motion } from 'framer-motion';

const Home = () => {

    return (
        <div id="home">
            <div id="target-section" className="home-container">
                <img src={require('../assets/logo_bo_alt.svg')} alt="BrokenOrgans logo" width='130rem' />
                <h3>- PRESENTS -</h3>
                <motion.img initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 13 }} src={require('../assets/logo.svg')} alt="MishMash logo" width='170rem' />
                <p>Bottled Cocktails with a yami taste <br /> For a hot israeli summer.</p>
                <Link smooth to='/#cocktails'>
                    <button className="secondary-btn">see cocktails</button>
                </Link>
            </div>
        </div>

    )
};

export default Home
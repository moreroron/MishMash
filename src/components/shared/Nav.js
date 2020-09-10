import React from 'react';
import './Nav.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Instegram } from '../../assets/social_instegram.svg';
import { ReactComponent as Facebook } from '../../assets/social_facebook.svg';
import { motion } from "framer-motion"
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';

const linksVariants = {
    hidden: {
        y: 0
    },
    visable: {
        y: 0,
        scale: 1.2,
        transition: {
            type: "spring",
            damping: 5,
            stiffness: 800
        }
    }
};

const Nav = () => {

    return (
        <div className="nav-container">
            <div className="nav">
                <Link smooth to='/#home'><Logo /></Link>

                <nav>
                    <NavLink smooth to='/about/#about' activeClassName="active">About Us</NavLink>
                    <NavLink smooth to='/cocktails/#cocktails' activeClassName="active">Cocktails</NavLink>
                    <NavLink smooth to='/giftcard/#giftcard' activeClassName="active">Gift Card</NavLink>
                    <NavLink smooth to='/contact/#contact' activeClassName="active">Contact</NavLink>
                </nav>

                <div className="social">
                    <motion.a
                        style={{ display: "inline-block" }} variants={linksVariants} initial='hidden' whileHover='visable'
                        href="https://www.facebook.com/MishMash.il" target="_blank" rel="noopener noreferrer"><Facebook />
                    </motion.a>
                    <motion.a
                        style={{ display: "inline-block" }} variants={linksVariants} initial='hidden' whileHover='visable'
                        href="https://www.instagram.com/mishmash.il" target="_blank" rel="noopener noreferrer"><Instegram />
                    </motion.a>
                </div>
            </div>
        </div>
    )
};

export default Nav
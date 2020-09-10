import React from 'react'
import './Cocktail.scss';
import { motion } from 'framer-motion';

const Cocktail = ({ cocktail }) => {

    const { spicy, sweet } = cocktail.flavors;

    return (
        <div className="cocktail-container">

            <motion.div
                className="cocktail-options"
                whileHover={{
                    rotate: 2,
                    opacity: 1,
                    backgroundColor: '#FFF0DD',
                    boxShadow: '3px 3px #FC9D1F'
                }}
                initial={{
                    opacity: 0
                }}>

                <motion.div
                    className="image-icon"
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 800 }}>
                    <img src={require('../../assets/cocktail_hover_icon.svg')} alt="" />
                </motion.div>
            </motion.div>

            <div className="cocktail">
                <div className="header">
                    <h2>{cocktail.name} <span className="price">{cocktail.price}</span></h2>
                    <div>
                        {spicy && <img className="flavor" src={require(`../../assets/cocktail_type_spicy.svg`)} alt={cocktail.name} />}
                        {sweet && <img className="flavor" src={require(`../../assets/cocktail_type_sweet.svg`)} alt={cocktail.name} />}
                    </div>
                </div>
                <div className="slogan">{cocktail.slogan}</div>
                <div className="ingredients">
                    {cocktail.ingredients.map((ingredient, index) => (
                        <span key={ingredient.name} className="ingredient">{ingredient.amount} {ingredient.type} {ingredient.name}
                            <img style={{ display: index === cocktail.ingredients.length - 1 ? 'none' : '' }} className="ingredient-sep" src={require('../../assets/sep.svg')} alt="sep" />
                        </span>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Cocktail
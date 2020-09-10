import React from 'react'
import Cocktail from './Cocktail';
import './CocktailsMenu.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CocktailsMenu = ({ cocktailModal, setCocktailModal, cocktails }) => {

    return (
        cocktails && cocktailModal && (
            <div id="cocktails" className="inner-page-container">
                <section className="section-headline"><h2>Mish Mash Cocktails</h2></section>
                <div className="cocktails">
                    {cocktails.map(cocktail => (
                        <div key={cocktail.name} onClick={() => setCocktailModal({ show: true, cocktail: cocktail })}>
                            <Cocktail cocktail={cocktail} />
                        </div>
                    ))}
                </div>
                <Link to='/add-cocktail' style={{ textDecoration: 'none' }}>
                    <button style={{ margin: '1rem auto', display: 'block' }} className="primary-btn">
                        + Add Cocktail
                </button>
                </Link>
            </div>
        )
    )
};

const mapStateToProps = (state) => ({
    cocktails: state.cocktails
});

export default connect(mapStateToProps)(CocktailsMenu)
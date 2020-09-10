import React, { useEffect } from 'react'
import Cocktail from './Cocktail';
import './CocktailsMenu.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCocktails } from '../../store/actions/cocktails';

const CocktailsMenu = ({ cocktailModal, setCocktailModal, cocktails, dispatch }) => {

    useEffect(() => {
        dispatch();
    }, [dispatch])

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

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: () => dispatch(fetchAllCocktails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsMenu)
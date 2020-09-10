import React, { useState } from 'react';
import './AddCocktail.scss';

const AddCocktail = () => {
    const [ingredientsCounter, setIngredientsCounter] = useState(1);

    const [fields, setFields] = useState({
        name: '',
        slogan: '',
        price: '0',
        flavors: { 'spicy': false, 'sweet': false },
        ingredients: [{ name: '', amount: 0, type: 'oz' }]
    });

    const handleInput = (e) => {
        setFields({ ...fields, [e.target.id]: e.target.value });
    }

    const handleFlavors = (e) => {
        setFields({ ...fields, flavors: { ...fields.flavors, [e.target.id]: e.target.checked } });
    }

    const handleIngredients = (e) => {
        const [index, id] = e.target.id.split('_');
        const ingredients = [...fields.ingredients];
        ingredients[index] = { ...ingredients[index], [id]: e.target.value }
        setFields({ ...fields, ingredients })
    }

    const handleIngredientsCounter = () => {
        setIngredientsCounter(ingredientsCounter + 1);
        fields.ingredients.push({ name: '', amount: 0, type: 'oz' });
    }

    const handleDeleteIngredient = (ingredient) => {
        if (fields.ingredients.length > 1) {
            const updatedIngredients = fields.ingredients.filter(ingr => ingr.name !== ingredient.name);
            setFields({ ...fields, ingredients: updatedIngredients });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
    }

    return (
        <div className="container">
            <h2 className="section-headline">Add Cocktail</h2>
            <form className="fields" onSubmit={handleSubmit}>

                <div className="field">
                    <label htmlFor="name">Cocktail Name</label>
                    <input value={fields.name} onChange={handleInput} id="name" className="input" type="text" />
                </div>

                <div className="field">
                    <label htmlFor="slogan">Slogan</label>
                    <input value={fields.slogan} onChange={handleInput} id="slogan" className="input" type="text" />
                </div>

                <div className="field">
                    <label htmlFor="price">Price -₪-</label>
                    <input value={fields.price} onChange={handleInput} id="price" className="input" type="number" />
                </div>

                <div className="field">
                    <label htmlFor="flavors">Flavors</label>
                    <div className="flavor-checkboxes">
                        <input value={fields.flavors.Spicy} onChange={handleFlavors} id="spicy" type="checkbox" />
                        <label htmlFor="spicy">Spicy</label>
                        <input value={fields.flavors.Sweet} onChange={handleFlavors} id="sweet" type="checkbox" />
                        <label htmlFor="sweet">Sweet</label>
                    </div>
                </div>

                <div className="field ingredients-field">
                    <label htmlFor="ingredients">Ingredients:</label>
                    <div className="ingredients">
                        {fields.ingredients.map((ingredient, i) => (
                            <div className="ingredient" key={ingredient.name}>
                                <button onClick={() => handleDeleteIngredient(ingredient)} type="button">X</button>
                                <input
                                    value={ingredient.name}
                                    onChange={handleIngredients}
                                    id={i + '_name'}
                                    className="input"
                                    type="text"
                                    placeholder="name" />
                                <input
                                    value={ingredient.amount}
                                    onChange={handleIngredients}
                                    id={i + '_amount'}
                                    className="input"
                                    type="text"
                                    placeholder="amount" />
                                <select value={ingredient.type} onChange={handleIngredients} id={i + '_type'}>
                                    <option value="oz">Oz</option>
                                    <option value="gram">Gram</option>
                                    <option value="number">Number</option>
                                </select>
                            </div>
                        ))}
                        <button
                            type='button'
                            onClick={handleIngredientsCounter}
                            style={{ display: 'block' }}
                            className="primary-btn">+ Add Ingredien
                        </button>
                    </div>

                </div>

                <button className='primary-btn' type="submit">Add Cocktail</button>
            </form>

        </div>
    )
}

export default AddCocktail
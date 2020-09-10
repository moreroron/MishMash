import React, { useState } from 'react';
import './AddCocktail.scss';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addCocktail } from '../../store/actions/cocktails';

const AddCocktail = ({ dispatch }) => {
    const [ingredients, setIngredients] = useState([{ name: '', amount: 0, type: 'oz' }]);
    const [ingredientsCounter, setIngredientsCounter] = useState(1);
    const { register, handleSubmit, errors, watch } = useForm();
    const watchIngredients = watch('ingredients');

    const handleIngredientsCounter = () => {
        setIngredientsCounter(ingredientsCounter + 1);
        ingredients.push({ name: '', amount: 0, type: 'oz' });
    }

    const handleDeleteIngredient = (ingredient) => {
        if (ingredients.length > 1) {
            const updatedIngredients = watchIngredients.filter((ing) => ing.name !== ingredient.name);
            setIngredients(updatedIngredients);
        }
    }

    const onSubmit = (data) => {
        console.log(data);
        dispatch(addCocktail({ ...data }));
    }

    return (
        <div className="inner-page-container">
            <section className="section-headline"><h2>Add Cocktail</h2></section>
            <form className="fields" onSubmit={handleSubmit(onSubmit)}>

                <div className="field">
                    <label>Cocktail Name</label>
                    <input ref={register({ required: true })} name='name' className="input" />
                </div>
                {errors.name && <div className="error">Cocktail name is required</div>}

                <div className="field">
                    <label>Slogan</label>
                    <input ref={register({ required: true })} name='slogan' className="input" />
                </div>
                {errors.slogan && <div className="error">Slogan is required"</div>}

                <div className="field">
                    <label>Price (shekel)</label>
                    <input ref={register({ required: true, pattern: { value: /^[0-9]+$/, message: 'Only round numbers are allowed' } })} name='price' className="input" />
                </div>
                {errors.price && <div className="error">A cocktail must have a price</div>}
                {errors.price?.message && <div className="error">{errors.price.message}</div>}

                <div className="field">
                    <label>Flavors</label>
                    <div className="flavor-checkboxes">
                        <input ref={register} name="flavors.spicy" type="checkbox" />
                        <label>Spicy</label>
                        <input ref={register} name="flavors.sweet" type="checkbox" />
                        <label>Sweet</label>
                    </div>
                </div>

                <div className="field ingredients-field">
                    <label>Ingredients:</label>
                    <div className="ingredients">
                        {ingredients && ingredients.map((ingredient, i) => (
                            <div key={i}>
                                <div className="ingredient">
                                    <button onClick={() => handleDeleteIngredient(ingredient)} className="delete-ingredient" type="button">x</button>
                                    <input ref={register({ required: true })} name={`ingredients[${i}].name`} className="input" placeholder="name" />
                                    <input ref={register({ required: true, pattern: { value: /(^\d+$)|^(\d*)\.\d+$|^(\d*)\/\d+$/, message: '- Amount can only contain numbers' } })} name={`ingredients[${i}].amount`} className="input" placeholder="amount" />
                                    <select ref={register} name={`ingredients[${i}].type`}>
                                        <option value="oz">oz</option>
                                        <option value="ml">ml</option>
                                        <option value="g">gram</option>
                                        <option value="">number</option>
                                    </select>
                                </div>
                                {errors.ingredients?.[i] && (
                                    <div className="error" style={{ marginLeft: '0' }}>
                                        <div>{errors.ingredients[i].name && "- Name is required "}</div>
                                        <div>{errors.ingredients[i].amount && "- Amount is required "}</div>
                                        <div>{errors.ingredients[i].amount?.message}</div>
                                    </div>
                                )}
                                <div className="line"></div>
                            </div>
                        ))}
                        <button type='button' onClick={handleIngredientsCounter} style={{ width: '100%' }} className="secondary-btn">+ Add Ingredient</button>
                    </div>
                </div>
                <button className='primary-btn' type="submit">Add Cocktail</button>
            </form>
        </div>
    )
}

export default connect()(AddCocktail)
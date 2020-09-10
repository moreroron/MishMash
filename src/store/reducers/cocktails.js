const initState = {
    cocktails: [{
        name: 'Early Days',
        price: 55,
        flavors: { spicy: true, sweet: true },
        slogan: 'Bizarre, Fizzy, Purple',
        ingredients: [{ name: 'Taquila', amount: '1/3', type: 'oz' }, { name: 'Lemon', amount: '1', type: '' }, { name: 'Tomato Juice', amount: '1/2', type: 'oz' }]
    }]
};

const cocktails = (state = initState, action) => {
    switch (action.type) {

        case 'GET_ALL_COCKTAILS':


        case 'ADD_COCKTAIL':
            const updatedCocktails = [...state.cocktails, {
                name: action.cocktail.name,
                slogan: action.cocktail.slogan,
                price: action.cocktail.price,
                flavors: { spicy: action.cocktail.flavors.spicy, sweet: action.cocktail.flavors.sweet },
                ingredients: action.cocktail.ingredients
            }]
            return { ...state, cocktails: updatedCocktails };

        default: {
            return { ...state }
        }
    }
};

export default cocktails
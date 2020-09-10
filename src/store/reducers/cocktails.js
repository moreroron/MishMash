const initState = {
    cocktails: []
};

const cocktails = (state = initState, action) => {
    switch (action.type) {

        case 'FETCH_ALL_COCKTAILS':
            return { ...state, cocktails: action.cocktails }

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
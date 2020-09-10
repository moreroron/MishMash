export const addCocktail = cocktail => {
    return async (dispatch, getState, { firestore }) => {

        firestore.collection('cocktails')
            .add({ ...cocktail, createdAt: new Date() });

        dispatch({
            type: 'ADD_COCKTAIL',
            cocktail
        })
    }
}

export const fetchAllCocktails = () => {
    return async (dispatch, getState, { firestore }) => {

        const snapshot = await firestore.collection('cocktails').orderBy('createdAt', 'asc').get();
        let cocktails = [];
        snapshot.forEach(doc => {
            cocktails.push({ ...doc.data() });
        });

        dispatch({
            type: 'FETCH_ALL_COCKTAILS',
            cocktails
        })
    }
}
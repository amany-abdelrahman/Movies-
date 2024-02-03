 const INITIAl_VALUE = []

 export default function favoritesReducer (state = INITIAl_VALUE, action){
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return [...state,
                action.payload];

        case 'REMOVE_FROM_FAVORITES':
            return state.filter(movie =>
                 movie.id !== action.payload);
                default:
            return state;
        }
};
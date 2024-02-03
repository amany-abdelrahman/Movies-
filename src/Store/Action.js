export const addFavorites = (movie) =>{
    return {
        type: "ADD_TO_FAVORITES",
        payload: movie
    }
}

export const removeFromFavorites = (movieId) => {
    return {
      type: 'REMOVE_FROM_FAVORITES',
      payload: movieId
    }
}
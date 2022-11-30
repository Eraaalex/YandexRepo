export const selectGenreModule =(state)=> state.genre;

export const selectGenres = (state) => Object.values(selectGenreModule(state).entities);

export const selectGenreById = (state, genreId) =>
    selectGenreModule(state).entities[genreId];

export const selectGenresBooksIds = (state, genreId) =>
    selectGenreModule(state).entities[genreId].books;

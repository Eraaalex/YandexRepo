export const selectGenreModule =(state)=> state.genre;

export const selectBooks = (state) => Object.values(selectGenreModule(state).entities);
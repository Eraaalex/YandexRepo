import {bookSlice, genreSlice, reviewSlice} from "./index";
import {prepareData} from "../utils";

export const loadReviewsIfNotExist =(bookId) => (dispatch, getState) =>{
    dispatch(bookSlice.actions.startLoading());
    fetch(`http://localhost:3001/api/reviews?bookId=${bookId}`)
        .then((response) => response.json())
        .then((genres) => {
            dispatch(reviewSlice.actions.successLoading(prepareData(genres)));
        })
        .catch(() => {
            dispatch(reviewSlice.actions.failLoading());
        });
};
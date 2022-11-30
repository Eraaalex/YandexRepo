import {Book} from '../components/Book/Book';
import {Reviews} from '../components/Reviews/Reviews';
import {useDispatch, useSelector} from "react-redux";
import {selectGenreById, selectGenres} from "../store/genre/selectors";
import {useState} from "react";
import {selectBookById} from "../store/book/selectors";

export const OneBookPage = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => selectGenres(state));
    const [activeTypeBook, setActiveTypeBook] = useState();
    const book = useSelector((state) => selectBookById(this.props.location.state.bookId));
    const genre = useSelector((state) => selectGenreById(this.props.location.state.genreId));
    return (
        <div>
            <Book bookId={book.id} genreId={genre.id}></Book>
            <Reviews bookReviews={book.reviews} bookStars={book.stars}></Reviews>
        </div>
    );
};

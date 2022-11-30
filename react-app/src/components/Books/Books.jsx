import {BookCard} from "../Book/BookCard";
import commonStyles from '../../commonStyles.module.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadBooksIfNotExist} from "../../store/book/loadBooksIfNotExist";
import {selectBookById, selectBooks, selectIsBooksLoading} from "../../store/book/selectors";
import {selectGenresBooksIds} from "../../store/genre/selectors";
export const Books =({genreId}) =>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(genreId))
    }, [genreId])
    console.log(genreId);
    const isLoading = useSelector((state) => selectIsBooksLoading());
    const bookIds = useSelector((state) => selectGenresBooksIds(state, genreId));
    if (isLoading) {
        return <span>Loading...</span>;
    }
    if (!bookIds){
        return null;
    }
    return <div className={commonStyles.list_gap}>
        {
        bookIds.map((id) => <BookCard bookId ={id} key ={id} genreId={genreId}></BookCard>)
        }
    </div>
    
}
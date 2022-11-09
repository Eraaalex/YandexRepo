import {BookCard} from "../Book/BookCard";
import commonStyles from '../../commonStyles.module.css'
export const Books =(props) =>{
    return <div className={commonStyles.list_gap}>
        {
        props.genre.books.map((book) => <BookCard book ={book} key ={book.id} genreName={props.genre.name} initial_count={props.initial_count}></BookCard>)
        }
    </div>
    
}
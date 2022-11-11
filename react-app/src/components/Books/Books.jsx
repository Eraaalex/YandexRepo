import {BookCard} from "../Book/BookCard";
import commonStyles from '../../commonStyles.module.css'
export const Books =({genre}) =>{
    return <div className={commonStyles.list_gap}>
        {
        genre.books.map((book) => <BookCard book ={book} key ={book.id} genreName={genre.name}></BookCard>)
        }
    </div>
    
}
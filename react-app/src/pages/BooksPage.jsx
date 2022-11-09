import { Books } from "../components/Books/Books"
import { useState } from "react";
import classnames from "classnames";
import styles from './styles.module.css';
export const BooksPage =({genres}) =>{
    const [activeTypeBook, setActiveTypeBook] = useState(genres[0]);
return <div>
        <div className={styles.navigation_books_wrap}>
            <div>
            <ul className={styles.list_navigation}>
            {
                genres.map((genre) => <li key={Math.floor(Math.random() * 1000)}>
                    <button className ={classnames(styles.button_navigation, genre.id === activeTypeBook.id && styles.button_navigation_active)} onClick ={()=> {setActiveTypeBook(genre)}}>{genre.name}</button>
                    </li>)
            }
        </ul>
        
        </div>
        <Books genre ={activeTypeBook} initial_count={0}></Books>
</div>


</div>
}
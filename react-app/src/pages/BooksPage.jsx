import {Books} from "../components/Books/Books"
import {useState} from "react";
import classnames from "classnames";
import styles from './styles.module.css';
import {useSelector} from "react-redux";

export const BooksPage = (props) => {
    const genres = useSelector((state) => Object.keys(state.genre.entities));
    const [activeTypeBook, setActiveTypeBook] = useState(genres[0]);
    return <div>
        <div className={styles.navigation_books_wrap}>
            <div>
                <ul className={styles.list_navigation}>
                    {
                        {genres.length > 0 && genres.map((genre) => <li key={Math.floor(Math.random() * 1000)}>
                                <button
                                    className={classnames(styles.button_navigation, genre.id === activeTypeBook.id && styles.button_navigation_active)}
                                    onClick={() => {
                                        setActiveTypeBook(genre)
                                    }}>{genre.name}</button>
                            </li>)
                        }
                    }
                </ul>
            </div>
            {activeTypeBook && <Books genre={activeTypeBook} initial_count={0}></Books>}
        </div>
    </div>
}

import {Books} from "../components/Books/Books"
import {useEffect, useState} from "react";
import classnames from "classnames";
import styles from './styles.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectBooks} from "../store/genre/selectors";
import {loadGenresIfNotExist} from "../store/genre/loadGenresIfNotExist";

export const BooksPage = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => selectBooks(state));
    const [activeTypeBook, setActiveTypeBook] = useState(useSelector((state) => selectBooks(state)));
    console.log(genres);
    useEffect(() => {
        dispatch(loadGenresIfNotExist);
    },[])

    console.log(activeTypeBook);
    return <div>
        <div className={styles.navigation_books_wrap}>
            <div>
                <ul className={styles.list_navigation}>

                        {genres.length > 0 && genres.map((genre) => 
                        <li key={Math.floor(Math.random() * 1000)}>
                                <button

                                    className={classnames(styles.button_navigation//, genre?.id === activeTypeBook.id && styles.button_navigation_active
                                    )}
                                    onClick={() => {
                                        setActiveTypeBook(genre)
                                    }}>{genre.name}</button>
                            </li>
                        )
                        }

                </ul>
            </div>
            {activeTypeBook && <Books genre={activeTypeBook} initial_count={0}></Books>}
        </div>
    </div>
}

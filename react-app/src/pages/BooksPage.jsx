import {Books} from '../components/Books/Books';
import {useEffect, useState} from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {selectGenres} from '../store/genre/selectors';
import {loadGenresIfNotExist} from '../store/genre/loadGenresIfNotExist';
import {Link, NavLink, Outlet} from "react-router-dom";

export const BooksPage = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => selectGenres(state));
    const [activeTypeBook, setActiveTypeBook] = useState();
    console.log(genres);

    useEffect(() => {
        genres.length > 0 && setActiveTypeBook(genres[0])
    }, [genres])

    useEffect(() => {

        dispatch(loadGenresIfNotExist)
    }, [])


    return (
        <div>
            <div className={styles.navigation_books_wrap}>
                <div className={styles.list_navigation}>

                    {genres.length > 0 &&
                        genres.map((genre) => (
                            <NavLink
                                to={genre.id}

                                className={({isActive}) => classnames(styles.button_navigation,
                                    {[styles.button_navigation_active]: isActive,})
                                }
                                key={genre.id}
                            >
                                <button>
                                    {genre.name}
                                </button>
                            </NavLink>
                        ))}
                </div>

                <Outlet/>
            </div>
        </div>
    );
};

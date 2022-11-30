import styles from './styles.module.css';
import commonStyles from '../../commonStyles.module.css';
import {BookCard} from './BookCard';
import {useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";

export const Book = ({bookId, genreId}) => {
    const book = useSelector((state) => selectBookById(state, bookId));
    return (
        <div className={styles.bookInformation_wrap}>
            <BookCard bookId={bookId} key={bookId} genreId={genreId}></BookCard>

            <div className={styles.bookInformation}>
                <h3 className={commonStyles.h3}>Аннотация</h3>
                {book.annotation.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

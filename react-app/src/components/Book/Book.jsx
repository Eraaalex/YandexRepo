
import styles from './styles.module.css';
import { BookCard } from "./BookCard";
export const Book = (props) => {
    
    return <div className={styles.bookInformation_wrap}>
<BookCard genreName={props.genreName} book ={props.book}></BookCard>
        
<div className={styles.bookInformation}>
            <h3 className ={styles.h3}>Аннотация</h3>
            {
                props.book.annotation.map((paragraph) => <p>{paragraph}</p>)
            }
        </div>
    
    </div>
}
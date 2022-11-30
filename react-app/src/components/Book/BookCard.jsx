import styles from './styles.module.css';
import commonStyles from '../../commonStyles.module.css';
import { useState } from 'react';
import solidStar from '../../icons/star_solid.svg';
import emptyStar from '../../icons/star.svg';
import classnames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../../store/book/selectors";
import {selectBookCount} from "../../store/cart/selector";
import {selectGenreById} from "../../store/genre/selectors";
import {cartSlice} from "../../store/cart";
import {Link} from "react-router-dom";
export const BookCard = (props) => {
  const dispatch = useDispatch();
  const book = useSelector((state) => selectBookById(state, props.bookId))
  const count = useSelector((state) => selectBookCount(state,props.bookId))
  const genre = useSelector((state) => selectGenreById(state, props.genreId))
  if (!book){
    return null;
  }

  return (
    <div className={styles.bookInformation}>
      {/*Have no /book in simple_api/ index.js*/}
      <Link to="/book" state ={{bookId: props.bookIdl , genreId: props.genreId}}><h3 className={commonStyles.h3}>{book.name}</h3></Link>
      <div className={styles.book_information}>
        <span className={commonStyles.span}>{book.author}</span>
        <span className={commonStyles.span}>{genre.name}</span>
        <div className={classnames(commonStyles.span, commonStyles.stars)}>
          {book.stars.map((star) => (
            <span>
              <img src={star === 1 ? solidStar : emptyStar} alt="" />
            </span>
          ))}
        </div>
      </div>

      <div className={styles.buttons_cost_wrap}>
        {book.cost !== undefined ? (<div className={styles.cost}>{book.cost} ₽</div>)
            :(<div className={styles.cost}> Книги закончились</div>)
        }

        <div className={styles.buttons_wrap}>
          <button
            className={styles.button}
            onClick={() => dispatch(cartSlice.actions.removeBook(props.bookId))}
            disabled={count === 0}
          >
            -
          </button>
          <span className={styles.count_text}>{count}</span>
          <button
            className={styles.button}
            onClick={() => dispatch(cartSlice.action.addBook(props.bookId))}
            disabled={count === 6}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

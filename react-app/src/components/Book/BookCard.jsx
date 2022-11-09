import styles from './styles.module.css';
import commonStyles from '../../commonStyles.module.css';
import { useState } from 'react';
import solidStar from '../../icons/star_solid.svg';
import emptyStar from '../../icons/star.svg';
import classnames from "classnames";
export const BookCard =(props) =>{
    const [count,setCount] = useState(props.initial_count);
    return <div className={styles.bookInformation}>
            
    <h3 className ={commonStyles.h3}>{props.book.name}</h3>
    <div className ={styles.book_information}>
    <span className ={commonStyles.span}>{props.book.author}</span>
    <span className ={commonStyles.span}>{props.genreName}</span>
    <div className ={classnames(commonStyles.span, commonStyles.stars)}>{props.book.stars.map((star) => <span><img src={star === 1 ? solidStar : emptyStar} alt="" /></span>)}</div>
    </div>
    
<div className={styles.buttons_cost_wrap}>
<div className={styles.cost}>{props.book.cost} ₽</div>
<div className={styles.buttons_wrap}>
    <button className ={styles.button} onClick={() => setCount(count-1)} disabled = {count === 0}>-</button>
    <span className={styles.count_text}>{count}</span>
    <button className ={styles.button} onClick={() => setCount(count+1)} disabled = {count === 6}>+</button>
</div>
</div>
</div>
}
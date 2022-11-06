import styles from './styles.module.css';
import styles_from_Book from '../Book/styles.module.css'
import solidStar from '../../icons/star_solid.svg';
import emptyStar from '../../icons/star.svg';
import classnames from "classnames";
import commonStyles from '../../commonStyles.module.css';
export const Review =(props) => {
 return <div className={styles.review_wrap}>
    <div>
    <h3 className={styles_from_Book.h3}>{props.review.author}</h3>
    <div className ={classnames(commonStyles.span, commonStyles.stars)}>{props.stars.map((star) => <span><img src={star === 1 ? solidStar : emptyStar} alt="" /></span>)}</div>
</div>
<p className={styles.p}>{props.review.text}</p>
 </div>

}
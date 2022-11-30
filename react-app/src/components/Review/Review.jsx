import styles from './styles.module.css';
import styles_from_Book from '../Book/styles.module.css'
import solidStar from '../../icons/star_solid.svg';
import emptyStar from '../../icons/star.svg';
import classnames from "classnames";
import commonStyles from '../../commonStyles.module.css';
import {useSelector} from "react-redux";
import {selectReviewById} from "../../store/review/selectors";
export const Review =({reviewId, stars}) => {

 const review = useSelector((state) => selectReviewById(state, reviewId));
 return <div className={styles.review_wrap}>
    <div>
    <h3 className={styles_from_Book.h3}>{review.author}</h3>
    <div className ={classnames(commonStyles.span, commonStyles.stars)}>{stars.map((star) => <span><img src={star === 1 ? solidStar : emptyStar} alt="" /></span>)}</div>
</div>
<p className={styles.p}>{review.text}</p>
 </div>

}
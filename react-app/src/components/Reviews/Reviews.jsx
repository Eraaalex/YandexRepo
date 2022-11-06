import { Review } from "../Review/Review"
import commonStyles from "../../commonStyles.module.css"
export const Reviews =({book}) =>{
    return <div className={commonStyles.list_gap}>
        {
            book.reviews.map((review) => <Review review= {review} key ={review.id} stars ={book.stars}></Review>)
        }
    </div>
}
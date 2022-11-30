import { Review } from "../Review/Review"
import commonStyles from "../../commonStyles.module.css"
export const Reviews =({bookReviews, bookStars}) =>{

    return <div className={commonStyles.list_gap}>
        {
            bookReviews.map((id) => <Review reviewId= {id} key ={id} stars ={bookStars}></Review>)
        }
    </div>
}
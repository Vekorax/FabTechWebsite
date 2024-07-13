import useReviewList from "../hooks/useReviewList";
import ReviewItem from "./ReviewItem";

function ReviewList(props) {
    const {reviewList} = useReviewList();
    const jsxListItem = reviewList.map((review) =>
        <ReviewItem review={review} key={review.id} className={props.className}/>);

    return(
        <div className="reviews">
            {jsxListItem}
        </div>
    )
}

export default ReviewList;
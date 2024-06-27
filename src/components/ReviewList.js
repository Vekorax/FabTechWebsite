import useReviewList from "../hooks/useReviewList";
import ReviewItem from "./ReviewItem";

function ReviewList() {
    const {reviewList} = useReviewList();
    const jsxListItem = reviewList.map((review) =>
        <ReviewItem review={review} key={review.id}/>);

    return(
        <div className="reviews">
            {jsxListItem}
        </div>
    )
}

export default ReviewList;
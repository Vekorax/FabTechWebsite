import { Link} from "react-router-dom";

function ReviewItem(props) {
    let stars = "";

    for (let i = 0; i < props.review.stars; i++) {
        stars += "⭐";
    } 
    return (
                <Link to={`/review/${props.review.id}`} className={props.className}>
                        <img src={props.review.image} alt="reviewImage"/>
                        <div>
                                <h2>{props.review.name}</h2>
                                <p>{props.review.review}</p>
                                <h3>{props.review.price} $</h3>
                                <p>{props.review.username}</p>
                                <p>{stars}</p>
                        </div>
                </Link>
    );
}

export default ReviewItem;
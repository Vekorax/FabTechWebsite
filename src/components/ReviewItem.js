import { Link } from "react-router-dom";

function ReviewItem({review}){
    let stars = "";

    for (let i = 0; i < review.stars; i++) {
        stars += "⭐";
    } 
    console.log(review.image);
    return (
        <Link className="reviewLink" to={`/review/${review.id}`}>
            <div className="review">
                <img src={review.image} alt="reviewImage"/>
                <div className="reviewText">
                    <div className="reviewFirstInfo">
                        <h1>{review.name}</h1>
                        <p>{review.review}</p>
                    </div>
                    <div className="reviewLastInfo">
                        <p>{review.price}$</p>
                        <div className="reviewLastInfo2">
                            <p>{review.username} - </p>
                            <p>{stars}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ReviewItem;
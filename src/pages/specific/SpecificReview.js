import {useParams} from 'react-router-dom';
import reviewsServices from '../../services/reviewsService';
import {useEffect, useState} from 'react';

function SpecificReview() {
    const {id} = useParams();
    const [review, setReview] = useState({})
    useEffect(()=> {
        reviewsServices.getReviewsById(id).then(
            (data) => setReview(data)
        );
      }, [id]);
    return (
        <div>
            <h1>{review.name}</h1>
            <h3>{review.stars} / 5</h3>
            <p>{review.review}</p>
        </div>
    );
}

export default SpecificReview;
import {useEffect, useState} from 'react';
import reviewsServices from '../services/reviewsService';

function useReviewList() {
    const [reviewList, setReviewList] = useState([]);
    useEffect(()=>{
      reviewsServices.getAllReviews().then(
          (data) => setReviewList(data)
      );
    }, []);
    return {
      reviewList,
    };
}

export default useReviewList;
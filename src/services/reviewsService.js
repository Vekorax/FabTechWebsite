import axios from 'axios';

async function getAllReviews() {
    const res = await axios.get('reviews');
    return res.data;
}

async function getReviewsById(id) {
    const res = await axios.get(`reviews/${id}`);
    return res.data[0];
  }

  const reviewsServices = {
    getAllReviews,
    getReviewsById,
  };

export default reviewsServices;
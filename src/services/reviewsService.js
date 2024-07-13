import axios from 'axios';

async function getAllReviews() {
    const res = await axios.get('reviews');
    return res.data;
}

async function getReviewsById(id) {
    const res = await axios.get(`reviews/${id}`);
    return res.data[0];
  }

async function getNumberOfReviews() {
  const res = await axios.get('reviews');
  return Object.keys(res.data).length;
}

const reviewsServices = {
  getAllReviews,
  getReviewsById,
  getNumberOfReviews,
};


export default reviewsServices;
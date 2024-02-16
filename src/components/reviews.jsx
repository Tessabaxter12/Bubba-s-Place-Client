import './reviews.css';
import ReviewsIndex from './reviews/ReviewsIndex'

const Reviews = (props) => {
	const { msgAlert } = props
	
    return (
		<div className="review-container">
			<h1>Bubba's Place Reviews</h1>
			<ReviewsIndex msgAlert={msgAlert} />
		</div>
	);
};

export default Reviews;

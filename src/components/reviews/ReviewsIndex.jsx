// this component is going to take functionality away from Home.js, and focus only on displaying a list of reviews gathered from the database, via an API call
// used for updating state with api data
import {useState, useEffect} from 'react' 
import { getAllReviews } from "../../api/review"

// used for rendering things
import LoadingScreen from '../shared/LoadingScreen'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StarRating from '../shared/StarRating'


const cardContainerLayout = {
	display: 'flex',
	flexFlow: 'row wrap',
	justifyContent: 'center',
	backgroundColor: 'lightblue'
}

const ReviewsIndex = (props) => {
    // two pieces of state for rendering
    const [reviews, setReviews] = useState(null)
    const [error, setError] = useState(false)

    // destructure props
    const { msgAlert } = props

    useEffect (() => {
		getAllReviews()
			.then(res => {
				console.log('use Effect hook ran')
				setReviews(res.data.reviews)
			})
			.then(() => {
				msgAlert({
					heading: 'Success!',
					message: 'Here Are All The Reviews',
					variant: 'success'
				})
			})
			.catch(error => {
				msgAlert({
					heading: 'Oh No!',
					message: 'Something Went Wrong',
					variant: 'danger'
				})
				setError(true)
			})
	}, [])
	console.log('the reviews in ReviewsIndex: \n', reviews)
	
	if (error) {
		return <LoadingScreen />
	}

	if (!reviews) {
		return <LoadingScreen />
	} else if (reviews.length === 0) {
		return <p>Add A Review</p>
	}

	const reviewCards = reviews.map(review => (
		<Card key={review.id} style={{ width: '30%', margin: 5, backgroundColor: 'smokey-white' }}>
			<Card.Header><strong>{review.title}</strong></Card.Header>
			<Card.Body>
				<Card.Text>
					{review.comments}
				</Card.Text>.
				<Card.Text>
					<p>Guest Rating Score From 1-5:</p>
					<StarRating totalStars={review.rating}/>
				</Card.Text>
				{ review.owner ?
					<Card.Footer>owner: {review.owner.email}</Card.Footer>
					:
					null
				}
			</Card.Body>
		</Card>
	))

	return (
		<div className="countainer-md" style={ cardContainerLayout}>
			{ reviewCards }
		</div>
	)
}

export default ReviewsIndex
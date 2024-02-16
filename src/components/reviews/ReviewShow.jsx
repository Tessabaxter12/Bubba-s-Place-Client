import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneReview } from '../../api/review'
import LoadingScreen from '../shared/LoadingScreen'
import { Container, Card } from 'react-bootstrap'
import StarRating from '../shared/StarRating'

const ReviewShow = (props) => {
    const { reviewId } = useParams()
    const { user, msgAlert } = props

    const [review, setReview] = useState(null)

    useEffect(() => {
        getOneReview(reviewId)
            .then(res => setReview(res.data.review))
            .then(() => {
				msgAlert({
					heading: 'Success!',
					message: 'Here Is The Reviews',
					variant: 'success'
				})
			})
            .catch(err => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Someting went wrong',
                    variant: 'danger'
                })
            })
    },[])

    if (!review) {
        return <LoadingScreen></LoadingScreen>
    }

    return (
        <>
            <h1>Reviews For Bubba's Place</h1>
            <Container classNam='m-2'>
                <Card>
                    <Card.Header>
                        { review.Title }
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {review.comments}
                        </Card.Text>
                        <Card.Text>
                            <p>Guest Star Rating From 1-5:</p>
                            <StarRating totalStars={review.rating}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default ReviewShow
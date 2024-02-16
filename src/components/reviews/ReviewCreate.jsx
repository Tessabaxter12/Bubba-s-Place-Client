// import { useState } from 'react'
// import ReviewForm from '../shared/ReviewForm'
// import { useNavigate } from 'react-router-dom'
// import { createReview } from '../../api/review'
// import messages  from '../shared/AutoDismissAlert/messages'

// const ReviewCreate = (props) => {
//     const { user, msgAlert } = props

//     const onChange = (e) => {
//         e.persist()

//         setReview(prevReview => {
//             const updatedName = e.target.name
//             let updatedValue = e.target.value

//             if (e.target.type === 'number') {
//                 updatedValue = parseInt(e.target.value)
//             }
//             if (updatedName === 'adoptable' && e.target.checked) {
//                 updatedValue = true
//             } else if (updatedName === 'adoptable' && !e.target.checked) {
//                 updatedValue = false
//             }
//             const updatedReview = { [updatedName] : updatedValue }
//             return {
//                 ...prevReview, ...updatedReview
//             }
//         })
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()

//         createReview(user, review)
//             .then(res => { navigate(`/reviews/${res.data.review.id}`)})
//             .then(() => {
//                 msgAlert({
//                     heading: 'Oh Yeah!',
//                     message: messages.createReviewSuccess,
//                     variant: 'success'
//                 })
//             })
//             .catch(err => {
//                 msgAlert({
//                     heading: 'Oh no!',
//                     message: messages.generalError,
//                     variant: 'danger'
//                 })
//             })
//     }

//     console.log('the review inside create', review)
//     return (
//         <ReviewForm
//             Review={review}
//             handleChange={onChange}
//             handleSubmit={onSubmit}
//             heading="Add a new review!"
//         />
//     )
// }

// export default ReviewCreate
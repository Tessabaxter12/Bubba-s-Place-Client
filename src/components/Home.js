import './home.css';
import ReviewsIndex from './reviews/ReviewsIndex'

const Home = (props) => {
	const { msgAlert, user } = props
	
	return (
		<div className="home-container">
			<h1>Bubba's Place</h1>
			<h4>Welcome To Guest Accounts</h4>
			<img className="pool2" src="/images/bubbas.jpg" alt="Bubba's Logo" width="500" height="500"/>
			<ReviewsIndex msgAlert={msgAlert} />
		</div>
	)
}

export default Home;

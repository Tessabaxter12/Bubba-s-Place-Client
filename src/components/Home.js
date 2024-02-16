import './home.css';

const Home = () => {	
	return (
		<div className="home-container">
			<h1>Bubba's Place</h1>
			<img className="pool2" src="/images/bubbas.jpg" alt="Bubba's Logo" width="600" height="350"/>
			<div className="willowCreek-container">
				<h4>Welcome To My Home! My Name Is Tessa Baxter And I Will Be Your Host.</h4>
					<li>Send Any Questions To Me An Email At <a href="mailto:tessabaxter12@gmail.com">TessaBaxter12@gmail.com</a>.</li>
					<li>Please Read The Reviews From Prior Guests.</li>
					<li>Click The Property Detail Link In The Navigation Bar To View Photos Of Bubba's Place.</li>
					<li>Click The Location Detail Link In The Navigation Bar To View Details About Sunny Willow Creek.</li>
					<li>Sign Up To Make A Reservation For You Next Vacation In Willow Creek California.</li>
			</div>
		</div>
	)
}
export default Home;

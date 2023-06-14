import React from "react";
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Jumbotron from "./jumbotron.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (

		
		<div>
			<Navbar/>
			<Container/>
		</div>

		


		
	);
};

export default Home;

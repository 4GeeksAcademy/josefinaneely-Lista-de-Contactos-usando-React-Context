import { Link } from "react-router-dom";



export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<Link to="/Contactform">
						<button className="btn btn-primary justify-content-end"> Add Contact </button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
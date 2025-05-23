import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container justify-content-center">
				<h1
					style={{
						fontSize: "2.5rem",
						fontWeight: "bold",
						margin: "0 auto",
						textAlign: "center"
					}}
					className="w-100"
				>
					Contact Form
				</h1>
			</div>
		</nav>
	);
};
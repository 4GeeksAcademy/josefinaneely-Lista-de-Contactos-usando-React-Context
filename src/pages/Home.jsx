
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div>
			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">Name Last Name</h5>
					<p className="card-text">Home Adress</p>
					<p className="card-text">Phone Number</p>
					<p className="card-text">Email Adress</p>
				</div>
			</div>

			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">Name Last Name</h5>
					<p className="card-text">Home Adress</p>
					<p className="card-text">Phone Number</p>
					<p className="card-text">Email Adress</p>
				</div>
			</div>

			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">Name Last Name</h5>
					<p className="card-text">Home Adress</p>
					<p className="card-text">Phone Number</p>
					<p className="card-text">Email Adress</p>
				</div>
			</div>

			<div className="card text-center">
				<div className="card-body">
					<h5 className="card-title">Name Last Name</h5>
					<p className="card-text">Home Adress</p>
					<p className="card-text">Phone Number</p>
					<p className="card-text">Email Adress</p>
				</div>
			</div>





		</div>

	);
}; 

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const List = () => {
	const { store } = useGlobalReducer();
	const { contacts } = store;

	return (
		<div>
			{contacts && contacts.map((contact) => {
				return (
					<div key={contact.id}>
						<div className="card text-center">
							<div className="card-body">
								<h5 className="card-title">{contact.name}</h5>
								<p className="card-text">{contact.adress}</p>
								<p className="card-text">{contact.email}</p>
								<p className="card-text">{contact.phoneNumber}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}; 
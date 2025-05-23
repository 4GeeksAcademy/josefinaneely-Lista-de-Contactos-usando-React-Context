import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function List() {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <h1>Contact List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {store.contacts.map(contact => (
          <li
            key={contact.id}
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div>
              <strong>Nombre:</strong> {contact.name} <br />
              <strong>Email:</strong> {contact.email} <br />
              <strong>Teléfono:</strong> {contact.phoneNumber} <br />
              <strong>Dirección:</strong> {contact.adress}
            </div>
            <img
              src="https://randomuser.me/api/portraits/lego/1.jpg"
              alt="avatar"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: "20px"
              }}
            />
          </li>
        ))}
      </ul>
      <Link to="/contactform" className="btn btn-primary">Add Contact</Link>
    </div>
  );
}
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";




export default function List() {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    async function getContacts() {
      try {
        const respuesta = await fetch("https://playground.4geeks.com/contact/agendas/josefinaneely/contacts")
        const data = await respuesta.json()
        console.log(data)
        
    dispatch({
          type: "SET_CONTACTS",
          payload: data.contacts
        }
        )

      } catch (error) {
        console.log(error)
      }
    }
    getContacts()
  }, [])




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
              <Link to={`/edit-contact/${contact.id}`} >
              Editar
              </Link>
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


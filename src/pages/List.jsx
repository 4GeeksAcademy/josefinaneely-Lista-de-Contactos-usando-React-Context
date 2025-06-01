import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function List() {
  const { store, dispatch } = useGlobalReducer();
  const location = useLocation();

  useEffect(() => {
    async function getContacts() {
      try {
        const respuesta = await fetch("https://playground.4geeks.com/contact/agendas/josefinaneely/contacts");
        const data = await respuesta.json();
        dispatch({
          type: "SET_CONTACTS",
          payload: data.contacts
        });
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  }, [location]); // Esto asegura que se actualice al volver a la lista


  async function deleteContact(id) {
    try {
      const respuesta = await fetch(`https://playground.4geeks.com/contact/agendas/josefinaneely/contacts/${id}`, {
        method: "DELETE"
      });
      if (respuesta.ok) {
        dispatch({ type: "DELETE_CONTACT", payload: id });
      } else {
        console.log("Error al eliminar en la API");
      }
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <div className="container">
      <h1>Contact List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {store.contacts.map(contact => (
          <React.Fragment key={contact.id}>
            <li
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
                <strong>Teléfono:</strong> {contact.phone} <br />
                <strong>Dirección:</strong> {contact.address}
                
                <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                  <Link to={`/edit-contact/${contact.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-9.439 9.439a.5.5 0 0 1-.168.11l-4 1.5a.5.5 0 0 1-.65-.65l1.5-4a.5.5 0 0 1 .11-.168l9.439-9.439zm.708-.708a1.5 1.5 0 0 0-2.121 0l-9.439 9.439a1.5 1.5 0 0 0-.329.504l-1.5 4a1.5 1.5 0 0 0 1.95 1.95l4-1.5a1.5 1.5 0 0 0 .504-.329l9.439-9.439a1.5 1.5 0 0 0 0-2.121l-2.292-2.292z"/>
                    </svg>
                  </Link>
                  <button
                    onClick={() => deleteContact(contact.id)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      cursor: "pointer"
                    }}
                    aria-label="Eliminar contacto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#007bff" viewBox="0 0 16 16">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </button>
                </div>
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
            <hr style={{ border: "1px solid #ccc" }} />
          </React.Fragment>
        ))}
      </ul>
      <Link to="/contactform" className="btn btn-primary">Add Contact</Link>
    </div>
  );
}


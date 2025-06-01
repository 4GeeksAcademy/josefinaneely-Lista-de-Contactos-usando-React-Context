import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

function EditContact() {
    const { id } = useParams();
    const { store } = useGlobalReducer();
    const navigate = useNavigate();

    // Busca el contacto por id
    const contact = store.contacts.find(c => String(c.id) === id);

    // Estado local para el formulario
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    // Cuando el contacto esté disponible, llena el formulario
    useEffect(() => {
        if (contact) {
            setForm({
                name: contact.name || "",
                email: contact.email || "",
                phone: contact.phone || "",
                address: contact.address || ""
            });
        }
    }, [contact]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`https://playground.4geeks.com/contact/agendas/josefinaneely/contacts/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    if (!contact) return <div>Contacto no encontrado</div>;

    return (
        <div className="container">
            <h1>Editar Contacto</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Name Last Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    value={form.email}
                    onChange={handleChange}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    required
                    value={form.address}
                    onChange={handleChange}
                />
                <button type="submit" className="save-button">Guardar Cambios</button>
            </form>
        </div>
    );
}

export default EditContact;
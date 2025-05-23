import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Contactform() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        adress: ""
    });

    const { actions } = useGlobalReducer();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { ...form, id: Date.now() }; // Asigna un id único
        actions.addContact(newContact);
        setForm({ name: "", email: "", phoneNumber: "", adress: "" });
        navigate("/"); // Redirige a la lista de contactos
    };

    return (
        <div className="container">
            <h1>Add Contact</h1>
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
                    name="phoneNumber"
                    placeholder="Enter phone"
                    required
                    value={form.phoneNumber}
                    onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="adress"
                    placeholder="Enter address"
                    required
                    value={form.adress}
                    onChange={handleChange}
                />
                <button type="submit" className="save-button">Save Contact</button>
            </form>
            <p className="back-link">
                <Link to="/">Back To Contacts</Link>
            </p>
        </div>
    );
}
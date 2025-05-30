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


    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContact = { ...form}; 
        try {
            const respuesta = await fetch ("https://playground.4geeks.com/contact/agendas/josefinaneely/contacts", {
                method:"post", 
                body: JSON.stringify(newContact), 
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data = await respuesta.json()
            navigate("/"); 
        } catch (error) {
      console.log(error)      
        }    
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
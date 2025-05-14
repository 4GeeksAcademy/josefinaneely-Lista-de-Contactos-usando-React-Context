import React from "react";



export default function Services() {

    return (

        <div className="container">
            <h1>Add Contact </h1>
            <form>
                <label for="fullName">Name Last Name </label>
                <input type="text" id="fullName" placeholder="Full Name" required/>
                    <label for="email">Email Adress</label>
                    <input type="email" id="email" placeholder="Enter email" required/>
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Enter phone" required/>
                            <label for="address">Adress</label>
                            <input type="text" id="address" placeholder="Enter address" required/>
                                <button type="submit" class="save-button">Save Contact</button>
                            </form>

                            <p className="back-link">o
                                <a href="#">Back To Contacts</a>
                            </p>
                        </div>

                        ); 
                        
                        
    }



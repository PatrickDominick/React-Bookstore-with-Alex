import React from "react";
import { NavLink } from "react-router-dom";
 
export default function navbar() {
    return (
        <div className="navbar-wrapper">
            <NavLink to = "/">
                <button>View Books</button>
            </NavLink>
            <NavLink to = "/add-book">
                <button>Add Book</button>
            </NavLink>
        </div>
    )
}
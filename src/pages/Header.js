import React from "react";
import { Link } from "react-router-dom";

export default function Headers() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dasboard</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/forget-password">Forget Password</Link>
                </li>
            </ul>
        </nav>

    );

}
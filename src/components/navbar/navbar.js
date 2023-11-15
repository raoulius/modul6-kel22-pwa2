import React from "react";
import "./navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/profile">Profile</a></li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
}
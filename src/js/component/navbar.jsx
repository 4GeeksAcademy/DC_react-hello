import React from "react";

const Navbar = () => {

        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container-fluid col-9">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <ul className="nav justify-content-end">
            
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Contact</a>
                    </li>
                </ul>
            
            </div>
        </nav>)

}

export default Navbar;


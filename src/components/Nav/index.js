import React from "react";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">


            <div className="collapse navbar-collapse" id="navbarColor01">Google Books
        <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Search <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/savedbooks">Saved <span className="sr-only">(current)</span></a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;
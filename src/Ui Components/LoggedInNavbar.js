import React from 'react'
export const LoggedInNavbar = (props) => {
    return (
        <nav className="navbar shd navbar-expand-lg navbar-light bg-light sticky-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto mr-auto">
                    <li className="nav-item ml-5">
                        <a href="#" className="nav-link">
                            <b>
                                <p className="h4" onClick={props.setActive('home')}>
                                    Home</p>
                            </b>
                        </a>
                    </li>
                    <li className="nav-item ml-5" onClick={props.setActive('ab')}>
                        <a href="#" className="nav-link">
                            <b>
                                <p className="h4">
                                    My Account </p>
                            </b>
                        </a>
                    </li>
                    <li className="nav-item ml-5">
                        <button className="btn btn-light btn btn-outline-danger btn-lg"
                        >Log-Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
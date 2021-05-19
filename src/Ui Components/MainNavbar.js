import React from 'react';
import { useHistory } from 'react-router-dom'
export const MainNavbar = (props) => {
    const { push } = useHistory();
    return (
        <nav className="navbar shd navbar-expand-lg">
            <div className="p-2">
                <button className="ml-5 btn shd btn-light btn btn-outline-danger btn-lg"
                    onClick={() => push('/adminlogin')}>Admin Login</button>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <select name="" id="" className="form-control">
                            <option value="">-Pizza Type-</option>
                            <option value="veg">Veg</option>
                            <option value="nonveg">Non-Veg</option>
                        </select>
                    </li>
                    <li className="nav-item">
                        <select name="" id="" className="form-control">
                            <option value="">Sort By</option>
                            <option value="veg">Price lowest</option>
                            <option value="nonveg">Price Highest</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
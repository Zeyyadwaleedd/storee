import React from "react";
import { Link } from "react-router-dom";
export function Footer(){
    let username  = sessionStorage.getItem("Username");
    return(
        <>
            <div className="Footer container mb-3" style={{ background:"#DDD",borderRadius:"20px" }}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <img src="images/Logo/Logo.png" className="col-12" />
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4 offset-lg-2 mt-5">
                        <h3> Links </h3>
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            {username === null ? (
                                <>
                                    <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                                </>
                            ) : null}
                            <li className="nav-item">
                                <Link className="nav-link" to="/Register">Register</Link>
                            </li>
                            {username !== null ? (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Login">Logout</Link>
                                </li>
                                </>
                            ) :  null  }
                        </ul>

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-4">

                    </div>
                </div>
            </div>
        </>
    )
}
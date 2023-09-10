import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "../Style/style.css";
import axios from "axios";
export function Navbar() {
    let username = sessionStorage.getItem("Username");
    const[Cart,SetCart]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/Cart").then((RES)=>{
            SetCart(RES.data);
        });
    },[]) ;
    return (
        <>
           <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="images/Logo/Logo.png" width="100" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                        <Link to="/Cart" className="me-5">
                        <button type="button" className="btn btn-primary position-relative">
                        <i className="fa-solid fa-basket-shopping"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {Cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        </Link>

                    </div>
                </div>
            </nav>
           </div>
        </>
    );
}
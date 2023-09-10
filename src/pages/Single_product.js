import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export function Single_product() {
    let username = sessionStorage.getItem("Username");
    const { id } = useParams();
    const [Data_ID, SetData] = useState({});
    const[Cart,SetCart] = useState(0);
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8080/products/" + id).then(Res => {
            SetData(Res.data);
            console.log(Data_ID);
        });
    },[]);

    const[Cart_many,SetCart_many]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/Cart").then((RES)=>{
            SetCart_many(RES.data);
        });
    },[]) ;

    let Add_To_Cart = (e) => {
        e.preventDefault();
        if(username === "" || username === null){
            Navigate("/Login");
            toast.warning("You Must Login");
        }
        else{
            axios.post("http://localhost:8080/Cart",{
            title : Data_ID.title,
            image : Data_ID.image,
            price : Data_ID.price,
            Quntyiy : Cart,
            desc : Data_ID.desc,
            Total : Cart * Data_ID.price,
        }).then(()=>{
            Navigate(0);
        })
    }
}
    return (


        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="../images/Logo/Logo.png" width="100" />
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
                                ) : null}
                            </ul>
                            {/* <form className="d-flex">
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
     <button className="btn btn-outline-success" type="submit">Search</button>
   </form> */}
                            <Link to="/Cart" className="me-5">
                                <button type="button" className="btn btn-primary position-relative">
                                    <i className="fa-solid fa-basket-shopping"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {Cart_many.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 offset-lg-2">
                        <img src={Data_ID.image} height="300" className="col-12" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div classnam="card-body">
                            <h5 classnam="card-title text-center"> {Data_ID.title} </h5>
                            <h5 classnam="card-title text-center"> {Data_ID.price}$ </h5>
                            <p classnam="card-text text-center"> {Data_ID.desc} </p>
                        </div>
                        <form onSubmit={Add_To_Cart}>
                            <input min="1" value={Cart} onChange={e=>SetCart(e.target.value)} type="number" name="Quntity" className="form-control mb-2" />
                            <button type="submit" className="w-100 btn btn-dark"> ADD_TO_CART </button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
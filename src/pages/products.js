import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/products.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "../components/footer";


export function AllProducts() {

    const [Products, Setproducts] = useState([]);

    const[Cart,SetCart]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/Cart").then((RES)=>{
            SetCart(RES.data);
        });
    },[]) ;

    let Delete = (id) => {
        axios.delete("http://localhost:8080/products/" + id ).then(() => {
            toast.success("Product Is Deleted");
        });
    }
    useEffect(() => {
        axios.get("http://localhost:8080/products").then(response => {
            Setproducts(response.data);
        })
    },[]);
    return (
        <>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">
                            <img src="images/Logo/Logo.png" width="100" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/products">Products</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Login">Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Register">Register</Link>
                                </li>
                            </ul>
                            {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                            <Link to="/Cart" className="me-5">
                                <button type="button" class="btn btn-primary position-relative">
                                    <i class="fa-solid fa-basket-shopping"></i>
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                       {Cart.length}
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </nav>
            </div>

            <Link to="/Create"> <button className="btn btn-primary m-5"> <i class="fa-solid fa-plus"></i> </button> </Link>

            <div className="container mt-5 mb-5">
                <div className="row">

                    {Products.length <= 0 ? (
                        <p> No Products <Link to="/products"> Add Products </Link> </p>
                    ) : (
                        <>
                            {Products.map(product => (
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div classnam="card">
                                        <img classnam="card-img-top" height="250" src={product.image} alt="Card image cap" />
                                        <div classnam="card-body">
                                            <h5 classnam="card-title text-center"> {product.title} </h5>
                                            <h5 classnam="card-title text-center"> {product.price}$ </h5>
                                            <p classnam="card-text text-center"> {product.desc} </p>
                                            <Link to={"/Singel_product/" + product.id}> <button className="btn btn-primary w-100"> Detailes </button></Link>
                                            <Link to="#"> <button className="btn btn-danger w-25 m-3" onClick={() => Delete(product.id)}> <i class="fa-solid fa-trash-can"></i> </button></Link>
                                            <Link to={"/Update/"+product.id}> <button className="btn btn-primary w-25 m-3" > <i class="fa-solid fa-pen-to-square"></i> </button></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}
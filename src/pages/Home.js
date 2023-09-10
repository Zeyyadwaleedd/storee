import React, { useEffect, useState } from "react";
import "../Style/style.css";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
export function Home(){

    const [Products, Setproducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8080/products").then(response=>{
           Setproducts(response.data);
        });
    },[]);
    return(
        <>
           <div className="header">
                <div className="mt-5">
                    <Navbar />
                </div>
                <div className="DESC">
                    <h1> This is Store It's Very Easy Buy Now Eny Thing </h1>
                    <button className="btn btn-primary w-25 mt-3"> GetStart </button>
                </div>
           </div>

           <div className="container mt-5 mb-5">
                <h1 className="text-center mb-5"> Products </h1>
                <div className="row">

                { Products.length <= 0 ? (
                        <p> No Products <Link to="/products"> Add Products </Link> </p>
                    ) : (
                       <>
                            {Products.map(product=>(
                                 <div className="col-lg-4 col-md-4 col-sm-12">
                                 <div classnam="card">
                                     <img classnam="card-img-top" height="250" src={product.image} alt="Card image cap" />
                                     <div classnam="card-body">
                                         <h5 classnam="card-title text-center"> {product.title} </h5>
                                         <h5 classnam="card-title text-center"> {product.price}$ </h5>
                                         <p classnam="card-text text-center"> {product.desc} </p>
                                         <Link to={"/Singel_product/" + product.id}> <button className="btn btn-primary w-100"> Detailes </button></Link>
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
    );
}
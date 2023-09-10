import React, { useState , useEffect } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate , Link } from "react-router-dom";
import { Footer } from "../components/footer";
export function Cart(){

    const Navigate = useNavigate();
    const[CartData , SetCartData] = useState([]);
   
    useEffect(() => {
        axios.get("http://localhost:8080/Cart").then((Res)=>{
            SetCartData(Res.data);
        });
    }, []);

   
    let DeleteCart = (id)=>{
        axios.delete("http://localhost:8080/Cart/"+id).then(()=>{
            Navigate(0)
        })
    }
    return (
        <>
        <Navbar />
          <div className="container">
           {CartData.length <= 0 ? null : (
            <>
                {CartData.map(Cart=>(
                     <div className="row mt-4 mb-4">
                     <div className="col-4">
                         <img src={Cart.image} className="col-12" height="200" />
                     </div>
                     <div className="col-8">
                     <div classnam="card-body">
                            <h5 classnam="card-title text-center"> {Cart.title} </h5>
                            <h5 classnam="card-title text-center"> {Cart.price}$ </h5>
                            <p classnam="card-text text-center"> {Cart.desc} </p>
                            <h5> Quntity :  {Cart.Quntyiy} </h5> 
                            <h5> Total : {Cart.Total} </h5>
                            <button className="btn btn-danger w-50" onClick={()=>DeleteCart(Cart.id)}> Delete In Your Cart </button>
                        </div>  
                     </div>
                 </div>
                ))}
            </>
           )}

           <Link to="/Checkout"> <button className="btn btn-dark col-12 mb-5"> CheckOut </button> </Link>
          </div>
          <Footer />
        </>
    )
}
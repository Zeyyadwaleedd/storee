import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Checkout(){

    const Navgate  = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem("Username");
        if(username === "" || username === null){
            Navgate("/Login");
        }
    });

    return(
        <>
            <h1 className="text-center"> Check out </h1>
            <div className="container">
                <Link to="/Thanks" > <button className="btn btn-success col-12"> Confirmation </button> </Link>
            </div>
        </>
    )
}
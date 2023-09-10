import React from "react";
import { Link } from "react-router-dom";

export function Thanks(){
    return(
        <>
            <h1 className="text-center text-success mt-5"> 
                Your Order Has Been Confirmed Successfully
            </h1>
            <Link to="/Products" >
                 <h3 className="text-center text-dark text-decoration-none mt-5"> 
                    Follow Up Shoopping
                </h3>
            </Link>
        </>
    )
}
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export function Login(){

    const Navigate = useNavigate();
    const[Username , SetUsername] = useState('');
    const[Email , SetEmail]  = useState('');

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    let SUBLogin = (e)=>{
        e.preventDefault();
        if(Validation()){
            /// Implement Validation
            fetch("http://localhost:8080/Users/" + Username).then((res)=>{
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length === 0 ){
                    toast.error(" UserName IS Not Found ");
                }
                else{
                    if(resp.Username === Username && resp.Email === Email){
                        toast.success("Success Login");
                        sessionStorage.setItem("Username",Username);
                    }
                    else{
                        toast.error(" UserName OR Email IS Not Found ");
                    }
                }
            }).catch((error)=>{
                return null;
            })
        }
      }

        const Validation = ()=>{
            let resault = true;
            if(Username === "" || Username === null){
                resault = false;
                toast.warning("Please Enter UserName");
            }
            if(Email === "" || Email === null){
                resault = false;
                toast.warning("Please Enter Email");
            }
            return resault;
        }

    return(
        <>
            <div className="container mt-5">
            <Link to="/" > <button className="mt-4 ms-5 btn btn-primary mb-5"> Home Page </button> </Link>
                <form className="mt-5" onSubmit={SUBLogin}>
               
                <input type="text" placeholder="UserName" value={Username} onChange={e=>SetUsername(e.target.value)} className="form-control mb-3" name="Username"/>

                <input type="email" placeholder="Email" value={Email} onChange={e=>SetEmail(e.target.value)} className="form-control mb-3" name="Email"/>

               <button type="submit" className="btn btn-primary w-100"> Login </button>
               <p>Do You have Account ? <Link to="/Register" className="text-success"> Register </Link> </p>
                 </form>
                 <ToastContainer />
            </div>
        </>
    )
}
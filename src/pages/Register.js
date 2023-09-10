import React, { useState } from "react";
import "../Style/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Register(){

    const[Username , SetUsername] = useState("");
    const[Phone , SetPhone] = useState("");
    const[Email , SetEmail] = useState("");
    const Test = {
        Username  : "",
        Phone : "",
        Email : "",
        id:"",
    };
    const Navigate = useNavigate();

    let SUB_login = (e)=>{
        e.preventDefault();
        if(Validation()){
            Test.id = Username;
            Test.Username = Username;
            Test.Phone = Phone;
            Test.Email = Email;

            console.log(Test);
            axios.post("http://localhost:8080/Users",Test).then(()=>{
                toast.success("Register Success Login Now");
                Navigate("/Login");
            });
        }
    }

    let Validation = ()=>{
        let Resualt = true;

        if(Username === "" || Username === null){
            toast.warning("Enter UerName");
        }
        if(Phone === "" || Phone === null){
            toast.warning("Enter Phone");
        }
        if(Email === "" || Email === null){
            toast.warning("Enter Email");
        }

        return Resualt;
    }



    return (
        <>

            <div className="">
                <h1 className="text-center text-white mt-5"> Register </h1>
                <div className="container LO">
                <Link to="/" > <button className="mt-4 ms-5 btn btn-primary mb-5"> Home Page </button> </Link>
                    <form onSubmit={SUB_login}>
                        
                            <input type="hidden" name="id" value={Username} />

                            <input type="text" value={Username} onChange={e=>SetUsername(e.target.value)} placeholder="Enter Username" name="Username" className="form-control mb-5" />


                            <input type="text" value={Phone} onChange={e=>SetPhone(e.target.value)} placeholder="Enter Phone" name="Phone" className="form-control mb-5" />
                        

                            <input type="email" value={Email} onChange={e=>SetEmail(e.target.value)} placeholder="Enter Email" name="Email" className="form-control mb-5" />


                            <button className="btn btn-primary w-100"> Login </button>
                            <p>Do You have Account ? <Link to="/Login" className="text-success"> Login </Link> </p>
                   
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}
import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export function Update(){
    const Navigaet = useNavigate();
    const {id} = useParams();

    let SUBUpdate = (values)=>{
      axios.put("http://localhost:8080/Products/"+id, values).then(()=>{
        Navigaet("/Products");
      })
     
    }
    let SCEMA = ()=>{
        const S = yup.object().shape({
            title : yup.string().required(),
            price : yup.number().required().min(1),
            image : yup.string().required().url(),
            desc : yup.string().required(),
        });
        return S;
    }
    return(
        <>
          <Link to="/products"> <button className="btn btn-primary m-5"> <i class="fa-solid fa-left-long"></i> </button> </Link>
        
            <h1 className="text-center mb-3"> UPDATE PRODUCT </h1>
             <div className="container mt-3">
                <Formik
                    initialValues={{ 
                        title : "",
                        price : "",
                        image : "",
                        desc : "",
                     }}
                     onSubmit={SUBUpdate}
                     validationSchema={SCEMA}
                >
                    <Form>
                    <Field type="text" placeholder="Enter Title Product" className="form-control " name="title" />
                    <p className="text-danger mb-3"> <ErrorMessage name="title" /> </p>
                    
                    <Field type="number" placeholder="Enter Price Product" className="form-control " name="price" />
                    <p className="text-danger mb-3"> <ErrorMessage name="price" /> </p>
                    
                    <Field type="url" placeholder="Enter image Product URL" className="form-control " name="image" />
                    <p className="text-danger mb-3"> <ErrorMessage name="image" /> </p>
                   
                    <Field type="desc" placeholder="Enter desc Product" className="form-control " name="desc" />
                    <p className="text-danger mb-3"> <ErrorMessage name="desc" /> </p>
                    <button className="btn btn-primary w-100" type="submit"> Update Product  </button>
                    </Form>
                </Formik>
           </div>
        </>
    )
}
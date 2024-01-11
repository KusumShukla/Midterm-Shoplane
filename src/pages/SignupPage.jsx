import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import Endpoints from "../api/Endpoints";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


const SignupPage = () => {
    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: '',
    })
    const navigate = useNavigate()

    //initialvalues
    const initialValues = {
        firstName: "",
        // mobile: "",
        email: "",
        password: "",
    };
    //submit handler
    const onSubmit = (values) => {
        console.log(values)
        localStorage.setItem('user', JSON.stringify(values));

        navigate("/")

    }
    //validation schema
    const validationSchema = Yup.object({
        firstName: Yup.string().required("firstName is required"),
        mobile: Yup.string().required("mobile is required"),
        email: Yup.string()
            .required("email is required")
            .email("email must be a valid email address"),
        password: Yup.string()
            .required("password is required")
            .min(6, "password must be 6 charachter long"),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="wrapper">
                            <div class={requestResponse.alertClass} role="alert">
                                {requestResponse.textMessage}
                            </div>
                            <h2>Signup</h2>
                            <hr />
                            <form onSubmit={formik.handleSubmit}>

                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className={
                                            formik.touched.firstName && formik.errors.firstName
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />

                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <small className="text-danger">
                                            {formik.errors.firstName}
                                        </small>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <label>Mobile</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        className={
                                            formik.touched.mobile && formik.errors.mobile
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        value={formik.values.mobile}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <small className="text-danger">{formik.errors.mobile}</small>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className={
                                            formik.touched.email && formik.errors.email
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />


                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className={
                                            formik.touched.password && formik.errors.password
                                                ? "form-control is-invalid"
                                                : "form-control"
                                        }
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />

                                    {formik.touched.password && formik.errors.password ? (
                                        <small className="text-danger">
                                            {formik.errors.password}
                                        </small>
                                    ) : null}
                                </div>

                                <input
                                    type="submit"
                                    value="Signup"
                                    className="btn btn-primary btn-block"
                                    disabled={!formik.isValid}
                                />
                            </form>
                            <br />
                            <p className="text-center">
                                Already Registered?<Link to="/login"> Click Here</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    )
};
export default SignupPage;
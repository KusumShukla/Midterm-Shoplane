import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
//import Endpoints from "../api/Endpoints";

const LoginPage = () => {

    const navigate = useNavigate();
    const [requestResponse, setRequestResponse] = useState({
        textMessage: "",
        alertClass: "",
    });

    const initialValues = {
        username: "",
        password: "",
    };

    const onSubmit = (values) => {
        console.log(values);
        // axios
        //     .post("https://fakestoreapi.com/auth/login", values)
        //     .then(
        //         (response) => {
        //             setRequestResponse({
        //                 textMessage: "login successful",
        //                 alertClass: "alert alert-success",
        //             });
        //             console.log(response.data.token);
        //             localStorage.setItem("token", response.data.token);
        //             localStorage.setItem("user", JSON.stringify(response.data.user));
        //             navigate("/");
        //         },
        //         (error) => {
        //             setRequestResponse({
        //                 textMessage: error.response.data.message,
        //                 alertClass: "alert alert-danger",
        //             });
        //         }
        //     )
        //     .catch((error) => console.log(error));

        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (
            storedUser &&
            values.username === storedUser.email &&
            values.password === storedUser.password
        ) {
            localStorage.setItem('token', true);
            setRequestResponse({
                textMessage: "Login successful",
                alertClass: "alert alert-success",
            });
            // Perform any additional actions or navigation here
            navigate("/");
        } else {
            setRequestResponse({
                textMessage: "Invalid username or password",
                alertClass: "alert alert-danger",
            });
        }
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .required("username is required"),
        // .email("email must be valid email address"),
        password: Yup.string("password is required")
            .required("password must be atleast 6 charachter long")
            .min(6),
    });

    return (


        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div class={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
                        <h2>Login</h2>
                        <hr />
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                            validationSchema={validationSchema}
                            validateOnMount
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <Field
                                                type="text"
                                                name="username"
                                                className={
                                                    formik.touched.username && formik.errors.username
                                                        ? "form-control is invalid"
                                                        : "form-control "
                                                }
                                            />
                                            <ErrorMessage name="username">
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <Field
                                                type="password"
                                                name="password"
                                                className={
                                                    formik.touched.password && formik.errors.password
                                                        ? "form-control is invalid"
                                                        : "form-control "
                                                }
                                            />
                                            <ErrorMessage name="password">
                                                {(errorMessage) => (
                                                    <small className="text-danger">{errorMessage}</small>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn-btn-primary btn-btn-block"
                                            disabled={!formik.isValid}
                                        />
                                    </Form>
                                );
                            }}
                        </Formik>

                        <br />
                        <p className="text-center">
                            New User ? <Link to="/signup">Click Here</Link>
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};
export default LoginPage;

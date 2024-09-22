"use client";
import { useFormik } from "formik";
// import styles from "./page.module.css";
import signupSchema from "@/schemas/signupSchema";
import { signup } from "@/service/user.service";
import SuccessToast from "@/shared/SuccessToast";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
let initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  terms: false,
  plan : "free",
};
let Signup = () => {
  const router = useRouter()
  let [isSuccess, setIsSuccess] = useState(false)
  let { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: async () => {
  
        let response = await signup(values);
        if(response.status === 201) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        } else {
          setIsSuccess(false)
        }
        router.push('/auth/signin');
      },
    });
  return (
    <>
      <div className="wrapper">
        <section className="login-content">
          <div className="container h-100">
            <div className="row justify-content-center align-items-center height-self-center">
              <div className="col-md-5 col-sm-12 col-12 align-self-center">
                <div className="sign-user_card">
                  <img
                    src="../assets/images/logo.png"
                    className="img-fluid rounded-normal light-logo logo"
                    alt="logo"
                  />
                  {/* <img src="../assets/images/logo-white.png" className="img-fluid rounded-normal darkmode-logo logo" alt="logo" /> */}
                  <h3 className="mb-3">Sign Up</h3>
                  <p>Create your account.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="floating-label form-group text-left">
                          <input
                            className={`floating-input form-control ${
                              errors.firstName &&
                              touched.firstName &&
                              "is-invalid"
                            }`}
                            type="text"
                            name="firstName"
                            placeholder=" "
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label>Full Name</label>
                          {errors.firstName && touched.firstName && (
                            <small className="text-info">
                              {errors.firstName}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="floating-label form-group text-left">
                          <input
                            className={`floating-input form-control ${
                              errors.lastName &&
                              touched.lastName &&
                              "is-invalid"
                            }`}
                            type="text"
                            name="lastName"
                            placeholder=" "
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label>Last Name</label>
                          {errors.lastName && touched.lastName && (
                            <small className="text-info">
                              {errors.lastName}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="floating-label form-group text-left">
                          <input
                            className={`floating-input form-control ${
                              errors.email && touched.email && "is-invalid"
                            }`}
                            type="email"
                            name="email"
                            placeholder=" "
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label>Email</label>
                          {errors.email && touched.email && (
                            <small className="text-info">{errors.email}</small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="floating-label form-group text-left">
                          <input
                            className={`floating-input form-control ${
                              errors.password &&
                              touched.password &&
                              "is-invalid"
                            }`}
                            type="password"
                            name="password"
                            placeholder=" "
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label>Password</label>
                          {errors.password && touched.password && (
                            <small className="text-info">
                              {errors.password}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="floating-label form-group text-left">
                          <input
                            className={`floating-input form-control ${
                              errors.confirmPassword &&
                              touched.confirmPassword &&
                              "is-invalid"
                            }`}
                            type="password"
                            name="confirmPassword"
                            placeholder=" "
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label>Confirm Password</label>
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <small className="text-info">
                                {errors.confirmPassword}
                              </small>
                            )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="custom-control custom-checkbox mb-3 text-left">
                          <input
                            type="checkbox"
                            name="terms"
                            className={`custom-control-input ${
                              errors.terms && touched.terms && "is-invalid"
                            }`}
                            id="customCheck1"
                            checked={values.terms}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            I agree with the terms of use
                          </label>
                          {errors.terms && touched.terms && (
                            <p className="text-info">{errors.terms}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                    <p className="mt-3">
                      Already have an Account{" "}
                      <Link href="/auth/signin" className="text-primary">
                        Sign In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {isSuccess && (
<SuccessToast title="User Created" msg="Successfully registered!" />
      )}
    </>
  );
};

export default Signup;

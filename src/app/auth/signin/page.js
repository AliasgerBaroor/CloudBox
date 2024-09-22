"use client";
import { useFormik } from "formik";
import signinSchema from "@/schemas/signinSchema";
import { signin } from "@/service/user.service";
import SuccessToast from "@/shared/SuccessToast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ErrorToast from "@/shared/ErrorToast";

let initialValues = {
  email: "",
  password: "",
};
let Signin = () => {
  const router = useRouter();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState({
    state: false,
    message: "",
  });
  let { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signinSchema,
      onSubmit: async () => {
        try {
          let response = await signin(values);
          if (response.status === 201) {
            setIsSuccess(true);
            setIsError(false);
            setTimeout(() => {
              setIsSuccess(false);
            }, 3000);
          }
          localStorage.setItem("reel_instance_id", response.data.token);
          router.push("/dashboard");
        } catch (e) {
          console.log(e);
          let {
            response: {
              data: { message },
            },
          } = e;
          if (e.status === 404) {
            setIsSuccess(false);
            setIsError({ state: true, message: message });
            setTimeout(() => {
              setIsError({ state: false, message: "" });
            }, 3000);
          } else if (e.status === 401) {
            setIsSuccess(false);
            setIsError({ state: true, message: message });
            setTimeout(() => {
              setIsError({ state: false, message: "" });
            }, 3000);
          }
        }
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
                  <h3 className="mb-3">Sign In</h3>
                  <p>Login to stay connected.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="floating-label form-group">
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
                            <small className="text-info text-left">
                              {errors.email}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="floating-label form-group">
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
                            <small className="text-info text-left">
                              {errors.password}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="custom-control custom-checkbox mb-3 text-left">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <a
                          href="auth-recoverpw.html"
                          className="text-primary float-right"
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                    <p className="mt-3">
                      Create an Account{" "}
                      <Link href="/auth/signup" className="text-primary">
                        Sign Up
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
      {isError.state && <ErrorToast title="Auth error" msg={isError.message} />}
    </>
  );
};

export default Signin;

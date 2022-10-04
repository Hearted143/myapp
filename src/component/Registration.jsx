import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  Location: "",
  Age:"",
  University:"",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,

      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  Welcome to Our Registration Company
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      values={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="phone" className="input-label">
                      phone no.
                    </label>
                    <input
                      type="phone"
                      autoComplete="off"
                      name="phone"
                      id="phone"
                      placeholder="phone number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <p className="form-error">{errors.phone}</p>
                    ) : null}
                  </div>

                   <div className="input-block">
                    <label htmlFor="Location" className="input-label">
                      Location
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="Location"
                      id="Location"
                      placeholder="Location"
                      value={values.Location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Location && touched.Location ? (
                      <p className="form-error">{errors.Location}</p>
                    ) : null}
                  </div>

                   <div className="input-block">
                    <label htmlFor="Age" className="input-label">
                      Age
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="Age"
                      id="Age"
                      placeholder="Age"
                      values={values.Age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.Age && touched.Age ? (
                      <p className="form-error">{errors.Age}</p>
                    ) : null}
                  </div>

                   <div className="input-block">
                    <label htmlFor="University" className="input-label">
                      University
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="University"
                      id="University"
                      placeholder="University"
                      values={values.University}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.University && touched.University ? (
                      <p className="form-error">{errors.University}</p>
                    ) : null}
                  </div>

                  <div className="modal-buttons"> 
                    <a href="https://myaccount.google.com/" className="">
                      Want to register using Gmail?
                    </a>
                      <submit className="input-button" type="submit">submit</submit>
                  </div>
                </form>
                <p className="sign-up">
                  Already have an account? <a href="">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};



 export default Registration;
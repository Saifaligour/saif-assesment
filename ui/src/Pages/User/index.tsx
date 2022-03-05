/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './utils';
import { SubmitForm } from './redux/actions';
import './index.css';

export default function UserComponent() {
  const { errors, touched, values, handleSubmit, handleChange, resetForm } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (payload) => {
        const res = await SubmitForm(payload);
        if (res) resetForm();
      },
    });

  return (
    <>
      <section className="login-content-section">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="signin-box">
                <h2>Submit Form</h2>
                <p>Enter User Detail</p>
                <form onSubmit={handleSubmit}>
                  <div className="login-input">
                    <label htmlFor="fullNmae">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      className="form-control username"
                    />
                    <p className="forget-link text-danger">
                      {touched.fullName && errors.fullName}
                    </p>
                  </div>
                  <div className="login-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      className="form-control username"
                    />
                    <p className="forget-link text-danger">
                      {touched.email && errors.email}
                    </p>
                  </div>
                  <div className="login-input ">
                    <label htmlFor="message">Message</label>
                    <input
                      type="text"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      className="form-control username"
                    />
                    <p className="forget-link text-danger">
                      {touched.message && errors.message}
                    </p>
                  </div>

                  <div className="passcode-btn-box d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      Submit Form
                    </button>
                  </div>
                </form>
              </div>

              {/*
               */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

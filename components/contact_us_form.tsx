"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required."),
  message: Yup.string().required("Message is required."),
});

const ContactUsSectionForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Here you can handle form submission, like sending data to your server
      toast.success("Response recorded successfully!"); // Display toast on successful submission
      resetForm(); // Clear form fields
    },
  });

  return (
    <div className="w-full py-8 lg:py-16 mx-auto flex justify-center">
      <ToastContainer />
      {/* Centered Container for the Form */}
      <div className="w-full  flex flex-col items-center p-10  border border-gray-600 rounded-lg">
        <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-white">
          Let’s bring your vision to life
        </h2>

        {/* Form Section */}
        <form onSubmit={formik.handleSubmit} className="space-y-8 w-full max-w-md">
          {/* Name Input */}
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-normal text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-white ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500">{formik.errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-normal text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-white ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="w-full">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-normal text-white"
            >
              How can we help you?
            </label>
            <textarea
              id="message"
              rows={6}
              className={`block p-2.5 w-full text-sm bg-[#5D7B87] text-white shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 placeholder-white ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Leave a message..."
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500">{formik.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-40 py-3 px-4 text-sm font-medium text-center text-white border border-white-600 bg-primary-500 rounded-xl hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-primary-500 curser:pointer"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSectionForm;

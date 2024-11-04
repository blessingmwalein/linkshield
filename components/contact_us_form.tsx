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
    <div className="w-full py-8 lg:py-16 mx-auto max-w-screen-xl border border-gray-600 rounded-lg flex justify-center">
      <ToastContainer />
      {/* Center Container for the Form */}
      <div className="w-full flex flex-col items-start p-10">
        <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-white dark:text-white">
          Let’s bring your vision to life
        </h2>

        {/* Form Section */}
        <form onSubmit={formik.handleSubmit} className="space-y-8 w-full">
          {/* Name Input */}
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-normal text-white dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className={`shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
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
              className="block mb-2 text-base font-normal text-white dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`shadow-sm bg-[#5D7B87] text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light ${
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
          <div className="w-full sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-normal text-white dark:text-gray-400"
            >
              How can we help you?
            </label>
            <textarea
              id="message"
              rows={6}
              className={`block p-2.5 w-full text-sm bg-[#5D7B87] text-white shadow-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 placeholder-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 ${
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
          <button
            type="submit"
            className="w-50 py-3 px-4 text-sm font-medium text-center text-white rounded-xl border border-solid border-white"
            disabled={!formik.isValid || formik.isSubmitting} // Disable button if form is not valid
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsSectionForm;

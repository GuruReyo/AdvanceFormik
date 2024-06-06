import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "./FormControl";
function RegistrationForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "TelePhone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
      .min(6, "Minimum 6 charachters required")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords Must Match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
        is: "telephonemoc",
        then: (schema) => schema.required("Required"),
        otherwise: (schema) => schema.notRequired(),
      }),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <FormControl
              control="input"
              type="password"
              label="Confirm-Password"
              name="confirmPassword"
            />
            <FormControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
            />
            <button type="submit" disabled={!formik.isValid}>Sign Up</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default RegistrationForm;
